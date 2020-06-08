 //database 연결용 js파일
var mysql = require('mysql');

var connection = mysql.createConnection({

  host: 'localhost',

  port: 3306,

  user: 'root',

  password: '1234',

  database: 'healthing'

});

module.exports = connection;
