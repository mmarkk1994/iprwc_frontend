// Install express server
const express = require('express');
const path = require('path');

const app = express;

// Serve only the static files from the dist directory
app.use(express.static('/dist/webshop'));

app.get('/*', (req, res) =>
  res.sendfile('index.html', {root: 'dist/webshop/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);