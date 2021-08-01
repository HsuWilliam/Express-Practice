const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser'); // Middleware 
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("html", require("ejs").renderFile);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//可以抓取public資料夾路徑下之css，讓html檔能呈現css之樣式。
app.use(express.static("public"));

//Login Page route
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname +'/Login.html'));
});



// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end("hello world")
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
