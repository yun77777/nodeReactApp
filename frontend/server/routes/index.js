var express = require('express');
var router  = express.Router();

router.get('/', function(req, res){
    res.send({greeting : 'hello react x node.js'});
});

router.get('/hoi', function(req, res){
    res.send({greeting : 'hello react x nodez.js'});
});

module.exports = router;
