// Dependencies --------------------------
var https = require('https');
var express = require('express');
var apiHelper = require('../../app/backend/apiHelper');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');

// Config File --------------------------
var config = require('../../config');

var auth = {};
auth.login = "/login";
auth.signup = "/signup";




// MiddleWare -------------------------
router.use(function (req, res, next) {
    console.log("User Run App");
    next();

});

// ------------------------------------
router.post(auth.login, function (req, res) {
    return "";

});

router.post(auth.signup, function (req, res) {
    return "";

});

// Return Router
module.exports = router;