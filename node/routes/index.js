var express = require('express');
var router = express.Router();

/*db Section*/
var mysql_dbc = require('../db/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index_hidden', function(req, res, next) {
  res.render('index_hidden');
});

router.get('/index_tail', function(req, res, next) {
  res.render('index_tail');
});

router.get('/index_head', function(req, res, next) {
  res.render('index_head');
});

router.get('/common_head', function(req, res, next) {
  res.render('common_head', { title: 'Express' });
});

router.get('/detail', function(req, res, next) {
  res.render('detail/detail', { title: 'Express' });
});

/*create*/
var bar = ['결제방법','기본정보','기본정보','부가정보','일정','소개글','장소등록','사진'];
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express',bar:bar });
});

router.get('/test', function(req, res, next) {
  var test = 'select * from data';
  connection.query(test, function(err,result){          
    res.render('test', { title: 'Express',test:result });
  })
});

router.get('/test2', function(req, res, next) {
  res.render('test2', { title: 'Express' });
  res.send(req.query.id);
});

module.exports = router;
