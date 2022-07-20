const express = require('express');
const tokenChecker = require("../middlewares/tokenChecker");

const authenticationRouter = require("./authentication");
const usersRouter = require("./users-registration");

const router = express.Router();

router.get('/*', function(req, res, next){
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
});

router.use('/v1/authenticate', authenticationRouter);
router.use('/v1/users', usersRouter);

module.exports = router;
