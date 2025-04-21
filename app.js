const express = require('express');
const app = express();

// const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/views/contact-me.html');
});
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(8080);