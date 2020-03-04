var express = require('express');
var router = express.Router();

var mysqlDB = require('./mysql_db');

router.get('/', function (req, res, next) {
    mysqlDB.query('SELECT * FROM address',function(err,rows){
      data=rows;
      console.log(data);
      res.send(data);
    })
});

module.exports = router;