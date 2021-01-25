// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static('/src/webshop'));

app.get('/*', (req, res) =>
  // res.sendFile('index.html', {root: 'dist/webshop/'})
  res.sendFile(path.resolve('src/webshop/index.html'))
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
