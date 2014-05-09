var mysql = require('mysql');
/* If the node mysql module is not found on your system, you may
 * need to do an "sudo npm install -g mysql". */

/* You'll need to fill the following out with your mysql username and password.
 * database: "chat" specifies that we're using the database called
 * "chat", which we created by running schema.sql.*/
var dbConnection = mysql.createConnection({
  user: "localhost",
  password: "root",
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

var handleRequest = function (req, res) {

  res.writeHead(200, headers);

  if (req.method === 'GET') {
    // access database and see what file we get? YEZ
      // make it awesome

  }

  if (req.method === 'POST') {
    var message = '';
    res.on('data', function (chunk) {
      message += chunk;
    }).on('end', function () {

    });
  }

  res.end();

};

// ***** START NODE SERVER ***** //
require('http').createServer(handleReqest).listen(8080, '127.0.0.1');
