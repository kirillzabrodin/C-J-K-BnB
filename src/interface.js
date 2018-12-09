let rootURL = 'http://localhost:5000'

let apiCon = new APIConnector(jQuery, rootURL)
let userHandler = new userConnection(apiCon)
let spaceHandler = new spaceConnection(apiCon)

$(document).ready(function() {
  console.log("Hi")
  $('#signUp').click(function() {
    $('#signUpForm').show()
    $('#signInForm').hide()
    $('#signUp').hide()
    $('#signIn').show()
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
  //
  // $('#createSpaceBtn').click(function() {
  //   $('#createSpaceForm').show()
  // })
  //
  // $('#createSpaceSubmit').click(function() {
  //   let address = $('#spaceAddress').val()
  //   let noBeds = parseInt($('#spaceNoBeds').val())
  //   let userId = $('#userId').val()
  //   spaceHandler.createNewSpace(address, userId, noBeds)
  //   setTimeout(function() {
  //     updateSpace()} , 500)
  // })

  // updateSpace()
  //
  // $(".bookingbtn").click(function() {
  //   let spaceId = this.id
  //   let bookerId = $('#userId').val()
  //   console.log(spaceId, bookerId)
  //   let today = new Date()
  //   let nextWeek = today + 7
  //   bookHand.createNewBooking(spaceId, bookerId, today, nextWeek)
  // })


  //shoud we wait until login to trigger query spaces?
})

var updateSpace = function() {
  $('#allSpaces').empty()
  spaceHandler.querySpaces().then(function(res) {
    for (var i = 0; i < res.length; i ++){
      let id = res[i]._id;
      let name = res[i].name;
      let owner = res[i].owner;
      let description = res[i].description;
      let bookButton = "<button id=" + bookingId + " class=bookingbtn hidden>Book now!</button>"
      $('#allSpaces').append("<div class=listItem id=" + id + ">"
      + name
      + owner
      + description
      +"</div>");
    }
  })
}

// var login = function(email, password) {
//   userHandler.isLoginCorrect(email, password).then(function(res) {
//     if (res !== false) {
//       $.ajax({
//         url: '/',
//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify(res)
//       })
//       $('#createSpaceBtn').show()
//       $('.bookingbtn').show()
//       $('#signUpIn').hide()
//       $('#logOut').show()
//     } else {
//     }
//   })
// }
