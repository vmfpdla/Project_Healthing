var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//  !!!!! 라우터 정의 !!!!!!!!
var indexRouter = require('./routes/index');
var select_addRouter = require('./routes/select_add');
var print_PostSportsListRouter = require('./routes/print_PostSportsList');
var print_PostDistrictListRouter = require('./routes/print_PostDistrictList');
var print_PostFreeListRouter = require('./routes/print_PostFreeList');
var print_PostTeamListRouter = require('./routes/print_PostTeamList');
var usersRouter = require('./routes/users');
var makeTeamRouter = require('./routes/make_team')
var app = express();

var mysqlDB = require('./routes/mysql_db');
mysqlDB.connect();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// !!!!! 경로 정의 !!!!!
app.use('/', indexRouter);
app.use('/api/print_PostSportsList', print_PostSportsListRouter);
app.use('/api/print_PostDistrictList', print_PostDistrictListRouter);
app.use('/api/print_PostFreeList', print_PostFreeListRouter);
app.use('/api/print_PostTeamList', print_PostTeamListRouter);
app.use('/api/select_add', select_addRouter);
app.use('/api/users', usersRouter);
app.use('/api/make_team', makeTeamRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;