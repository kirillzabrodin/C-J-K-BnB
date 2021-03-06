var mongoose = require('mongoose');
var userSchema = require('./schemas/users')

function Connection(mongoose, schemas) {
  this.mongoose = mongoose;
  this.schemas = schemas; // looks like [{name:'user', schema:schema], ['spaces', spaceSchema]]
  this.models = {};
  this.compileSchemas();
  this.connect();
}

Connection.prototype.compileSchemas = function() {
  for (i = 0; i < this.schemas.length; i += 1) {
    this.models[this.schemas[i].name] =
      this.mongoose.model(this.schemas[i].name, this.schemas[i].schema)
  }
}

Connection.prototype.connect = function() {
  if (process.env.NODE_ENV === "test") {
    this.mongoose.connect('mongodb://localhost/C-J-K-BnB_test', { useNewUrlParser: true })
  } else {
    this.mongoose.connect('mongodb://localhost/MakersBnB', { useNewUrlParser: true })
  }
}

Connection.prototype.disconnect = function() {
  if (this.mongoose.connection.readyState === 1) {
    this.mongoose.connection.close()
  } else {}
}

Connection.prototype.create = function(modelName, data) {
  const model = this.models[modelName]
  const newDocument = new model(data);
  newDocument.save()
}

Connection.prototype.read = function(modelName, data = {}) {
  const model = this.models[modelName]
  return model.find(data)
}

Connection.prototype.update = function(modelName, id, data) {
  const model = this.models[modelName]
  model.findOneAndUpdate({_id: id}, data, {new: true})
}

Connection.prototype.delete = function(modelName, id) {
  const model = this.models[modelName]
  model.findOneAndDelete({_id: id})
}

module.exports = Connection;
