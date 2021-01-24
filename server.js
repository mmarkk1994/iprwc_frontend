// Install express server
const express = require('express');
const path = require('path');

const app = express;

// Serve only the static files from the dist directory
app.use(express.static('/dist/webshop'));

app.get('/*', (req, res) =>
  res.sendfile('index.html', {root: 'dist/webshop/'}),
);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
