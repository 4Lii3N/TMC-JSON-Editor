## TMC-JSON-Editor 
Hey there! This is a relatively simple command line tool that let's you edit
many .json's at once without losing any of your original Data.

---

#### Introduction:
Basically this package will look at the directory you specified 
and for any json it finds it will make a new version of it, to which it will apply a 
Template that you can set yourself. Also it renames the files so that the next 
time you run the command for the same directory it doesnt overwrite the files 
that were already changed in a previous run.

---

#### How to install:
First you have to make a new folder (``` mkdir ```), then cd in and run: <br>
``` npm init ``` <br>
after that just hit enter until the command is through and then run: <br>
``` npm install tmc-json-editor ``` 

---

#### Example:
##### Original Files:
    File Name:              Content:
    
    example.json            { '1':'1', '2':'2' } 
    exampleTemplate.json    { '1':'2', '2':'1' } 
##### Output:
    example.orig            { '1':'1', '2':'2' } 
    example.Edit.json       { '1':'2', '2':'1' } 
    exampleTemplate.json    { '1':'2', '2':'1' } 

---

 #### How to use:
In the folder you just installed you will find a jsonTemplate.JSON, in this template 
you can set what objects from your original json should be altered and what 
they should be altered to. Once you're done editing the Template you can 
then go ahead and execute the 'tje' command.

##### the syntax for the 'tje' command is as follows: <br>
``` tje ``` <br>
``` tje -i <path/to/the/folder/with/your/jsons> ``` <br> <br>
if you dont specify a path with the ``` -i ``` flag the package will scan from the directory you're currently in. 

The package will scan the specified directory recursively applying your 
template to any '.json' or '.JSON' it can find. Be careful as even if the json 
doesnt contain the object you specified in your template the program will just 
add it at the end of the file. 

---

###### by 4Lii3N ([Github](https://github.com/4Lii3N/))
