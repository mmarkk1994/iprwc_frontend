// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static('/dist/src'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/src/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
