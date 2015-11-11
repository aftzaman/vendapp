if(!GLOBAL.portal.mongoose)
{
    GLOBAL.portal.mongoose = require('mongoose');
    GLOBAL.portal.mongoose.connect(process.env.MONGOLAB_URI||'mongodb://localhost/myOffer');
}

module.exports.User = GLOBAL.portal.mongoose.model("User", require("./user.js").userSchema, "user");
module.exports.Category = GLOBAL.portal.mongoose.model("Category", require("./category.js").categorySchema, "category");