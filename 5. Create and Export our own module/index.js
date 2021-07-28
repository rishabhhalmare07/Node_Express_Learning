//./oper is a file we created and we are using(exporting) its content
const{add, sub, multi, name} = require("./oper");

console.log(add(7,7));
console.log(sub(10,7));
console.log(multi(7,7));
console.log(name);

// To run it onn terminal type "node index.js"