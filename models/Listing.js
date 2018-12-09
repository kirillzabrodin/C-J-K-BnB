var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
  {
    title: {type: String},
    user_id: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    description: {type: String, required: true}
  }
});

var Listing = mongoose.model('listing', listingSchema);

module.exports = Listing;
