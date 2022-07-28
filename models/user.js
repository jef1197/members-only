var mongoose = require('mongoose')
var Schema = mongoose.Schema; 

var User = new Schema(
    {
      username: { type: String, required: true },
      password: { type: String, required: true },
      member: {type: Boolean },
    }
)
module.exports = mongoose.model('User', User)