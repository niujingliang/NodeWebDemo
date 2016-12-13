var express = require('express');

var router = express.Router();
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/user', function(req, res, next) {
	res.render('user', { title: 'Express' });
});
router.get('/error', function(req, res, next) {
	res.render('error', { title: 'Express' });
});

module.exports = router;