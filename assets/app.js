
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

//Initial Value
var input = {};

//variable to reference database
var database = firebase.database();

function saveToFirebase() {
  event.preventDefault();

  //stores user input from HTML
  input.name = $('#name-input').val().trim();
  input.destination = $('#dest-input').val().trim();
  input.time = $('#time-input').val().trim();
  input.frequency = $('#freq-input').val().trim();

  //uploads input data to database
  database.ref().push({
    name: input.name,
    destination: input.destination,
    time: input.time,
    frequency: input.frequency
  });

//testing
  console.log(input.name);
  console.log(input.destination);
  console.log(input.time);
  console.log(input.frequency);
};

database.ref().on("child_added", function(snapshot) {

  console.log(snapshot.val());

  $('#name-input').append('<p>' + snapshot.val().name + '</p>');
  $('#dest-input').append('<p>' + snapshot.val().destination + '</p>');
  $('#time-input').append('<p>' + snapshot.val().time + '</p>');
  $('#freq-input').append('<p>' + snapshot.val().frequency + '</p>');
},

function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


$(".submit-btn").click(saveToFirebase);
