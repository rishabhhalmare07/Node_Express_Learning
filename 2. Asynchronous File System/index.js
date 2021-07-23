const fs = require("fs");
//Creating a file (read.txt) in Asynchronous JS 
fs.writeFile("read.txt", "Creating a file (read.txt) in Async way and adding content", (err) => {
    console.log("File is created");
    console.log(err);
});
//Adding extra content in read.txt file
fs.appendFile("read.txt", "adding extra text", (err) => {
    console.log(" Adding text to existing file");
});

// Reading data i.e displaying in text format (UTF-8 is used for printing in text)

fs.readFile("read.txt", "UTF-8", (err, data) => {
    console.log(data);
});