let rootURL = 'http://localhost:5000'

let apiCon = new APIConnector(jQuery, rootURL);
let userHandler = new UserHandler(apiCon)
let spaceHandler = new SpaceHandler(apiCon);

$(document).ready(function() {
  $('#signUp').click(function() {
    $('#signUpForm').show()
    $('#signInForm').hide()
    $('#signUp').hide()
    $('#signIn').show()
    updateSpace()
  })

  $('#signIn').click(function() {
    $('#signInForm').show()
    $('#signUpForm').hide()
    $('#signIn').hide()
    $('#signUp').show()
  })

  $('#signUpSubmit').click(function() {
    let name = $('#signUpName').val()
    let email = $('#signUpEmail').val()
    let password = $('#signUpPassword').val()
    userHandler.sendNewUser(name, email, password)
    login(email, password)
  })

  $('#signInSubmit').click(function() {
    let email = $('#signInEmail').val()
    let password = $('#signInPassword').val()
    login(email, password)
  })

  $('#logOutButton').click(function() {
    $('#logOut').hide()
    $('#signUpIn').show()
    $('#signIn').show()
    $('#signUp').show()
    $('#signInForm').hide()
    $('.btn').hide()
    $('#createSpaceBtn').hide()
    $.ajax({
      url: '/',
      type: 'POST',
      contentType: 'application/json',
      data: null
    })
  })

  $('#createSpaceBtn').click(function() {
    $('#createSpaceForm').show()
  })

  $('#createSpaceSubmit').click(function() {
    let address = $('#spaceAddress').val()
    let noBeds = parseInt($('#spaceNoBeds').val())
    let userId = $('#userId').val()
    spaceHandler.createNewSpace(address, userId, noBeds)
    setTimeout(function() {
      updateSpace()} , 500)
  })

  updateSpace()

  $(".bookingbtn").click(function() {
    let spaceId = this.id
    let bookerId = $('#userId').val()
    console.log(spaceId, bookerId)
    let today = new Date()
    let nextWeek = today + 7
    bookHand.createNewBooking(spaceId, bookerId, today, nextWeek)
  })


  // shoud we wait until login to trigger query spaces?
})

var updateSpace = function() {
  $('#allSpaces').empty()
  spaceHandler.querySpaces().then(function(res) {
    for (var i = 0; i < res.length; i ++){
      let id = res[i]._id;
      let name = res[i].name;
      let owner = res[i].owner;
      let description = res[i].description;
      let bookButton = "<button id=" + id + " class=bookingbtn hidden>Book now!</button>"
      let spaceInfo = "<div class=spaceItem id=" + id + ">"
      + "<h1>Name: " + name + "</br"
      + "<br><h1>Owner:</h1>" + owner
      + "<br>" + description
      +"</div>"
      $('#allSpaces').append(spaceInfo);
    }
  })
}
