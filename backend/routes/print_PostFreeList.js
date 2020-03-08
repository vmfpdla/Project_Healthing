// 지역별 게시판 리스트 출력
var express = require('express');
var router = express.Router();

var mysqlDB = require('./mysql_db');

router.get('/', function(req, res, next) {
    mysqlDB.query('SELECT * FROM board WHERE board_category=3;', function(err, rows) {
        data = rows;
        res.send(data);
    })
});

module.exports = router;