# 101353442_com3123_labtest1
comp3123 lab test1 F2023

Q1: ES6 Features
● Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
input: const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
output:
['pizza','wings']

Q2: 
● Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
o Call both promises separately and handle the resolved and reject results and then output to the console.
output:
{'message':  'delayed success!'} 
{'error':delayed exception!'}

Q3:File Module
● Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delet
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current working directory to
build directory path. It is acceptable, to have a remove.js script and separate add.js
script.