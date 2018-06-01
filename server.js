const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/pwahub.ru/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/pwahub.ru/fullchain.pem'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world');
}).listen(443, (err) => {
  if (err) {
    console.log('error happen', err);
  }
  console.log('server listening 443 port');
});


