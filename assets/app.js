
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDHYzfhNrGg8mVb6J2oFqlbAbMstd_1EJk",
    authDomain: "schedule-app-2dc62.firebaseapp.com",
    databaseURL: "https://schedule-app-2dc62.firebaseio.com",
    projectId: "schedule-app-2dc62",
    storageBucket: "schedule-app-2dc62.appspot.com",
    messagingSenderId: "555797784536"
  };

  firebase.initializeApp(config);


//variable to reference database
var database = firebase.database();

//Initial Values
var name = "";
var destination = "";
var time = "";
var frequency = 0;


function saveToFirebase() {

  event.preventDefault();

  name = $('#name-input').val().trim();
  destination = $('#dest-input').val().trim();
  time = $('#time-input').val().trim();
  frequency = $('#freq-input').val().trim();

  


}

$(".submit-btn").click(function(event) {
  /* Act on the event */
});
