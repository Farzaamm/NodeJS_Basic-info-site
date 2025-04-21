const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if(req.url === '/') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            } else {
                res.end(data);
            }
        });
    }else if(req.url === '/about') {
        fs.readFile('./views/about.html', (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            } else {
                res.end(data);
            }
        });
    }else if(req.url === '/contact-me') {
        fs.readFile('./views/contact-me.html', (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            } else {
                res.end(data);
            }
        });
    }else {
        fs.readFile('./views/404.html', (err, data) => {
            if (err) {
                console.error(err);
                res.end();
            } else {
                res.end(data);
            }
        });
    }
}).listen(PORT);

console.log('Server running at http://127.0.0.1:8080/'); 
