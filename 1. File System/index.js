const fs = require("fs");
//Creating a File
fs.writeFileSync("read.txt", "Using file_System(fs) module in NodeJS creating a file(read.txt) and adding content");
//Adding extra content
fs.appendFileSync("read.txt", " Adding some more text to same file");

//Read a file(to see what's inside a file)
//It will print buffer (a string of number)  
const buffer = fs.readFileSync("read.txt");
console.log(buffer);

//To print text nit content from a file
console.log(buffer.toString());