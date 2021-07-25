const os = require("os");
//os module gives information about our Computer's OS 
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freememory = os.freemem();
//dividing by 1024 once changes byte to KB 
console.log(`${freememory / 1024 / 1024 / 1024}`);

const totalmemory = os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024}`);