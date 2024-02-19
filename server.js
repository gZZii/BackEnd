const htpp = require('http');

const server = htpp.createServer((req, res) => {    
    res.end('Hello World');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});