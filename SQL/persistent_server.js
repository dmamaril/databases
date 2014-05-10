 var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();
/* Now you can make queries to the Mysql database using the
 * dbConnection.query() method.
 * See https://github.com/felixge/node-mysql for more details about
 * using this module.*/

/* You already know how to create an http server from the previous
 * assignment; you can re-use most of that code here. */


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-': 'content-type, accept',
  'access-control-max-age' : 10
};

var handle = function (req, res) {

  res.writeHead(200, headers);
  /*
    use chat;
    show tables;
    show columns in messages; // displays stuffs in tables
    drop table messages; // deletes table
    source schema.sql(path) // reloads sql
  */
  // if (req.method === 'GET') {
  //   dbConnection.query('SELECT * FROM messages', function (err, response) {
  //     console.log('huh');
  //     res.end();
  //   });
  // }

  // switch back to post later
  if (req.method === 'GET') {
    var message = '';
    res.on('data', function (datum) {
      message += datum;
    }).on('end', function () {
      message = JSON.parse(message);
      console.log(message);
      dbConnection.query('INSERT INTO messages (username, text) VALUES (' + message.username + ',' + message.text + ');', function (err, res) {
        if (err) { throw err; }
        console.log('Confirmed!');
      });
    });
  }

  res.end();
};

// ***** START NODE SERVER ***** //
console.log ('Booting up Node.js...');
require('http').createServer(handle).listen(3000, '127.0.0.1');
console.log ('Session started.');


// ***** REQUEST NODE MODULE FOR TESTS ***** //
var request = require('request');


// $.ajax({
//   url: 'http://127.0.0.1:3000',
//   data: 'POST',
//   data: '{"username" : "don", "text" : "hi"}',
//   success: function (response) {
//     console.log('plssss');
//   }
// });
