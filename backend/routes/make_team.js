var express = require('express');
var router = express.Router();
const multer = require('multer');
var mysqlDB = require('./mysql_db');

var multer_settings = multer({
    dest: 'public/images/'
});

router.get('/', function(req, res, next) {
    res.render('makeTeam', { title: 'makeTeam' });
});

router.post('/', multer_settings.single('teamImage'), function(req, res) {
    var Team = {
        teamImage: req.file.path,
        teamLink: req.body.teamLink,
        teamName: req.body.teamName,
        teamDays: req.body.teamDays,
        teamClock: req.body.teamClock,
        teamDetail: req.body.teamDetail,
        teamNumber: req.body.teamNumber,
        teamAddress: req.body.teamAddress
    }


    var mon = "";
    var tue = "";
    var wed = "";
    var thu = "";
    var fri = "";
    var sat = "";
    var sun = "";

    var date_id;
    var address_id;

    if (Team.teamDays.includes('월') == true) mon = Team.teamClock;
    if (Team.teamDays.includes('화') == true) tue = Team.teamClock;
    if (Team.teamDays.includes('수') == true) wed = Team.teamClock;
    if (Team.teamDays.includes('목') == true) thu = Team.teamClock;
    if (Team.teamDays.includes('금') == true) fri = Team.teamClock;
    if (Team.teamDays.includes('토') == true) sat = Team.teamClock;
    if (Team.teamDays.includes('일') == true) sun = Team.teamClock;

    async function test() {
        await f1()
        await f2()
        await f3()
        await f4()
    }

    function f1() {
        return new Promise(function(resolve, reject) {
            var sql_1 = 'INSERT INTO DATE(mon,tue,wed,thu,fri,sat,sun) VALUES(?,?,?,?,?,?,?)';
            var params_1 = [mon, tue, wed, thu, fri, sat, sun];
            mysqlDB.query(sql_1, params_1, function(err, rows) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("f1 : " + rows);
                    resolve();
                }
            })
        });
    }

    function f2() {
        return new Promise(function(resolve, reject) {
            var sql_2 = 'select max(date_id) as maxi from Date;';
            mysqlDB.query(sql_2, function(err, rows) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("f2 :" + rows[0].maxi);
                    date_id = rows[0].maxi;
                    resolve();
                }
            })
        });
    }

    function f3() {
        return new Promise(function(resolve, reject) {
            var sql_3 = 'select * from address WHERE address2_name=?;';
            var params_3 = [Team.teamAddress];
            mysqlDB.query(sql_3, params_3, function(err, rows) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("f3 :" + rows);
                    address_id = rows[0].address_id;
                    resolve();
                }
            })
        });
    }

    // 나중에 팀만드는 team_leader 로그인 구현한 후 세션값 살려야함
    // Team 에 값 추가
    function f4() {
        return new Promise(function(resolve, reject) {
            var sql_4 = 'INSERT INTO TEAM(team_name,team_opentalk,team_text,team_count,team_leader,team_date,team_address,team_image) VALUES(?,?,?,?,?,?,?,?)';
            var params_4 = [Team.teamName, Team.teamLink, Team.teamDetail, Team.teamNumber, 1, date_id, address_id, Team.teamImage];
            mysqlDB.query(sql_4, params_4, function(err, rows) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("f4 :" + rows);
                    resolve();
                }
            })
        });
    }

    test();

});
module.exports = router;

// var express = require('express');
// var router = express.Router();
// const multer = require('multer');
// var mysqlDB = require('./mysql_db');

// var mon = "";
// var tue = "";
// var wed = "";
// var thr = "";
// var fri = "";
// var sat = "";
// var sun = "";

// console.log("여기로 오긴왔어~");
// router.post('/', multer({ dest: 'public/images/' }).single('teamImage'), (req, res, next) => {
//     console.log("안녕~이미지 저장한다");
//     res.status(204).send()
// })

// router.get('/', function(req, res, next) {
//     console.log(req.body);
//     const Team = {

//         teamLink: req.file.teamLink,
//         teamName: req.file.teamName,
//         teamDays: req.file.teamDays,
//         teamClock: req.file.teamClock,
//         teamDetail: req.file.teamDetail,
//         teamNumber: req.file.teamNumber,
//     }
//     console.log(this.Team);
//     if (Team.teamDays.includes('월') == true) mon = teamClock;
//     if (Team.teamDays.includes('화') == true) tue = teamClock;
//     if (Team.teamDays.includes('수') == true) wed = teamClock;
//     if (Team.teamDays.includes('목') == true) thr = teamClock;
//     if (Team.teamDays.includes('금') == true) fri = teamClock;
//     if (Team.teamDays.includes('토') == true) sat = teamClock;
//     if (Team.teamDays.includes('일') == true) sun = teamClock;
//     var sql_1 = 'INSERT INTO DATE(date_id,mon,tue,wed,thr,fri,sat,sun) VALUES ("",?,?,?,?,?,?,?)';
//     var sq1_2 = 'INSERT INTO TEAM(team_id,team_name,team_opentalk,team_text,team_count,team_address,team_leader,team_date) VALUES ("",?,?,?,?,?,?,?)';

//     var params_1 = [mon, tue, wed, thr, fri, sat, sun];
//     var params_2 = [Team.teamName, Team.teamLink, Team.teamDetail, Team.teamNumber, Team.teamAddress, 1, 1];
//     mysqlDB.query(sql_1, params_1, function(err, rows) {
//         data = rows;
//         res.send(data);
//     })
//     mysqlDB.query(sql_2, params_2, function(err, rows) {
//         data = rows;
//         res.send(data);
//     })
// });



// module.exports = router