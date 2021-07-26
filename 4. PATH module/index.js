const path = require("path");
//just right click on index.js there you will get copy directory -you will get this = D:\Saved files\NodeJS\4. PATH module\index.js
console.log(path.dirname("D:\Saved files\NodeJS\4. PATH module\index.js"));
console.log(path.extname("D:\Saved files\NodeJS\4. PATH module\index.js"));
console.log(path.basename("D:\Saved files\NodeJS\4. PATH module\index.js"));
console.log(path.parse("D:\Saved files\NodeJS\4. PATH module\index.js"));

//TO use PATH module on individual or specific sub
const myPath = path.parse("D:\Saved files\NodeJS\4. PATH module\index.js");
console.log(myPath.name);

