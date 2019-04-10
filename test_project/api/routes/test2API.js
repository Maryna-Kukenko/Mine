var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API 2 is working properly');
});

module.exports = router;