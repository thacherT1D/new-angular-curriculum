// TODO:

// 3. Handle creation of pirate
// 4. Handle deletion
// 5. Handle update
// 6. Refactor!

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const pirates = require('./routes/pirates');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('tiny'));

app.use('/javascripts', express.static(__dirname + "/../client/javascripts"));
app.use('/stylesheets', express.static(__dirname + "/../client/stylesheets"));
app.use('/views', express.static(__dirname + "/../client/views"));

app.use('/api/pirates', pirates);

app.get('*', function(req, res) {
  // This code won't work, it is FORBIDDEN!!!!
  // res.sendFile(__dirname + '/../client/views/layout.html');

  // This code should work
  res.sendFile('layout.html', {root: './client/views'});
});

app.listen(3000, function() {
  console.log("Listening on port 3000...");
});
