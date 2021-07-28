const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
const multi = (a, b) => {
    return a * b;
};

const name = "Jack";

//This is how we are declaring modules to be passed and then using this same name in index.js and accessing it
module.exports = { add, sub, multi, name };
