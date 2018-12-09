function SpaceHandler(apiConnector) {
  this.apiConnector = apiConnector;
}

SpaceHandler.prototype.createNewSpace = function(address, owner_id, no_beds) {
  let spaceDetails = {address: address, owner_id: owner_id, no_beds: no_beds}
  this.apiConnector.connect('post', '/spaces', spaceDetails)
};

SpaceHandler.prototype.querySpaces = function () {
  return this.apiConnector.connect('get', '/spaces')
}

SpaceHandler.prototype.queryOwnSpaces = function(owner_id) {
  let spaces = this.querySpaces();
  let output = []
  return spaces.then((res, rej) => {
      for (i = 0; i < res.length; i += 1) {
        if (res[i].owner_id === owner_id) {
          output.push(res[i])
        }
      }
    }).then(() => {
      return output
    })
}

module.exports = SpaceHandler;
