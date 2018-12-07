#!/usr/bin/env node
var fs = require('fs');
const path = require('path');
var filewalker = require('filewalker');
const program = require('commander');
var chalk = require('chalk');
var arr4 = [];
var mergeJSON = require("merge-json") ;
global.__basedir = __dirname;
var baseDir = __basedir + '/jsonTemplate.JSON'
var jsonTemplate = JSON.parse(fs.readFileSync(baseDir));
console.log('___    __       __ _        __               \n' +
    ' | |V|/  ---  |(_ / \\|\\|---|_  _| o _|_ _  __\n' +
    ' | | |\\__   \\_|__)\\_/| |   |__(_| |  |_(_) | \n' +
    '\n');
console.log('commencing \n');
var ProgressBar = require('progress');

program
    .version ('0.0.1')
    .option('-i, --input <required>','user input')
    .parse(process.argv);
filewalker(program.input)
    .on('dir', function(p) {
    })
    .on('file', function(p, s, fullPath) {
        if (p.indexOf('Edit') == -1 && p.indexOf('Orig') == -1) {
            if (p.endsWith('.JSON') || p.endsWith('.json')) {
                arr4.push(fullPath);
            } else {
            }
        } else {
        }
    })
    .on('error', function(err) {
        console.error(err);
    })
    .on('done', function() {
        var bar = new ProgressBar('processing :total files: { :bar } :percent', { total: arr4.length, complete: chalk.green('#'), incomplete: chalk.red('·')});
        arr4.forEach(function(element) {
            var fName = path.basename(element);
            var arr = fName.split('.');
            arr.splice(1, 0, ".Edit.");
            var newfName = arr.join('');
            var arr3 =  fName.split('.');
            arr3.splice(-1, 1, ".Orig");
            var newoName = arr3.join('');
            var jsonContent = JSON.parse(fs.readFileSync(element));
            var newJson = mergeJSON.merge(jsonContent, jsonTemplate);
            var arr2 = element.split('/')
            arr2.splice(-1, 1)
            var newpName = arr2.join('/')
            fs.writeFileSync(newpName + '/' + newfName, JSON.stringify(newJson,2,2), 'utf8');
            fs.renameSync(element, newpName + '/' + newoName);
            bar.tick();
        });
        console.log(chalk.bold.green('\nCOMPLETE\n'));
    })
    .walk();
