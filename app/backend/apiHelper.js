var https = require('https');
var helper = {};


helper.DefineExtension = function (item) {

    var type = item.mimetype;

    if (type == "image/jpeg") {
        return ".jpg";
    } else if (type == "image/png") {
        return ".png"
    }
}

module.exports = helper;