#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.PORT || process.argv[2] || 5174);
const mime = {
  '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'application/javascript; charset=utf-8',
  '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.md':'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const clean = decodeURIComponent(req.url.split('?')[0]).replace(/\0/g, '');
  let file = path.join(root, clean === '/' ? 'index.html' : clean);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    fs.createReadStream(file).pipe(res);
  });
});
server.listen(port, '127.0.0.1', () => console.log(`Serving http://127.0.0.1:${port}`));
