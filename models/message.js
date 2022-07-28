var mongoose = require('mongoose')
const { DateTime } = require('luxon');
var Schema = mongoose.Schema; 

var MessageSchema = new Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      title: { type: String, required: true },
      message: { type: String, required: true },
      date: {type: Date, } ,// required: true
    }
)

MessageSchema.virtual('url').get(function() {
    return '/user/' + this._id;
});

MessageSchema.virtual('date_formatted').get(function() {
  if(this.date) {
      return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED)
  } else {
      return 'N/A'
  }
})

module.exports = mongoose.model('Message', MessageSchema)