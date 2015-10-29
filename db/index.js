if(!GLOBAL.portal.mongoose)
{
    GLOBAL.portal.mongoose = require('mongoose');
    GLOBAL.portal.mongoose.connect(process.env.MONGOLAB_URI||'mongodb://192.168.1.13/myOffer');
}

module.exports.User = GLOBAL.portal.mongoose.model("User", require("./user.js").userSchema, "user");
