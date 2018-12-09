var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({

  /// schema details to go here

});

var Listing = mongoose.model('listing', listingSchema);

module.exports = Listing;
