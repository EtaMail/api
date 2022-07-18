const express = require('express');
const router = express.Router();

router.get('/*', function(req, res, next){
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
});

module.exports = router;
