var mongoose = require('mongoose')
var Schema = mongoose.Schema; 

var MessageSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      title: { type: String, required: true },
      message: { type: String, required: true },
      // date: {type: Date, required: true}
    }
)

MessageSchema.virtual('url').get(function() {
    return '/user/' + this._id;
});

module.exports = mongoose.model('Message', MessageSchema)