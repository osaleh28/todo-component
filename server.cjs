const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const routes = { '/': ['index.html', 'text/html'], '/dist/app.js': ['dist/app.js', 'text/javascript'], '/dist/app.css': ['dist/app.css', 'text/css'] };
http.createServer((req, res) => {
  const route = routes[new URL(req.url, 'http://localhost').pathname];
  if (!route) { res.writeHead(404); res.end('Not found'); return; }
  fs.readFile(path.join(__dirname, route[0]), (err, content) => {
    if (err) { res.writeHead(500); res.end('Run npm run build first.'); return; }
    res.writeHead(200, { 'Content-Type': route[1] });
    res.end(content);
  });
}).listen(3000, '127.0.0.1', () => console.log('Open http://localhost:3000'));
