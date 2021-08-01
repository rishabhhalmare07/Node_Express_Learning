// http module is used to create our own web server
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from the other sides");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port no. 8000");
});
//http://localhost:8000/ - paste this url on browser and it will show our content