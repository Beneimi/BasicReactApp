var express = require("express");
var router = express.Router();
var response = require("../testResponse.json");
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'beneimi',
  password: 'gkuZ2sSmGMGfjsL7',
  database: 'beneimi'
})

var result;

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  result = rows[0].solution
})

console.log(result)
connection.end()

router.get("/", function(req, res, next) {
    res.send(response);
});

module.exports = router;