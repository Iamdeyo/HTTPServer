const http = require('http');
const fs = require('fs');

// Middleware
// Task 4
const middleware = (req, res, next) => {
  console.log(req);
  next();
};

const server = http.createServer((req, res) => {
  middleware(req, res, () => {
    const url = req.url;

    const user = {
      name: 'Ademola Taiwo',
      email: 'ademolataiwoayomide@gmail.com',
      age: 26,
    };
    // Routes
    switch (url) {
      // Task 1
      case '/':
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, Node.js!');
        break;

      // Task 3
      case '/api/user':
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(user));
        break;

      // Task 2
      case '/file':
        res.setHeader('Content-Type', 'text/plain');
        fs.readFile('data.txt', 'utf8', (err, data) => {
          res.end(data);
        });
        break;

      default:
        res.end('Route not found');
        break;
    }
  });
});

const port = 3000;
server.listen(port, 'localhost', () => {
  console.log(`Server listening on ${port}`);
});
