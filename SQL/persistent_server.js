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
  /*
    TO DO
    use chat;
    show tables;
    show columns in messages; // displays stuffs in tables
    drop table messages; // deletes table
    source SQL/schema.sql; // reloads sql
    select * from messages;
  */

var handle = function (req, res) {

  console.log('Serving request from ' + req.url + ' for a ' + req.method + ' request.');
  var index = req.url.lastIndexOf('/');
  var reqUrl = req.url.slice(index+1);
  console.log(reqUrl);


  if (req.method === 'GET') {
    headers['Content-type'] = 'application/json';
    res.writeHead(200, headers);


    dbConnection.query('SELECT * FROM messages', function (err, response) {
      res.end(JSON.stringify(response));
    });

  }

  // ***** HANLDE POST REQUEST COMPLETE ***** //
  if (req.method === 'POST') {
    res.writeHead(200, headers);
    var message = '';
    req.on('data', function (datum) {
      message += datum;
    }).on('end', function () {
      message = JSON.parse(message);
      dbConnection.query('INSERT INTO messages set ? ', message, function (err, res) {
        if (err) { throw err; }
        dbConnection.query('SELECT * from messages', function (err, response) {
          console.log(response);
        });
      });
      res.end();
    });
  }

};

// ***** START NODE SERVER ***** //
console.log ('Booting up Node.js...');
require('http').createServer(handle).listen(3000, '127.0.0.1');
console.log ('Session started.');


// var message = {username: 'don', text: 'will is a genius'};
// $.ajax({
//   url: 'http://127.0.0.1:3000',
//   type: 'POST',
//   data: JSON.stringify(message),
//   success: function (response) {
//     console.log('Success!');
//   }
// });
