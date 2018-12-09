var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({
  {
    name: {type: String},
    owner: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    description: {type: String, required: true},
    price: {type: Number}
  }
});

var Space = mongoose.model('space', spaceSchema);

module.exports = Space;
