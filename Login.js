const express = require('express');
const app = express();
const port = 3000;
const firebase = require('firebase');
const bodyParser = require('body-parser'); // Middleware 
var path = require('path');
AuthTag = false;
const test = "";
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("html", require("ejs").renderFile);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//可以抓取public資料夾路徑下之css，讓html檔能呈現css之樣式。
app.use(express.static("public"));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDrxqp3Sz-JZAPFW6uZfRiwmbtCzcM4MGk",
  authDomain: "hackathon-c32d0.firebaseapp.com",
  projectId: "hackathon-c32d0",
  storageBucket: "hackathon-c32d0.appspot.com",
  messagingSenderId: "87309438119",
  appId: "1:87309438119:web:01c750d070a7651ef45f82",
  measurementId: "G-TVNM2ME4N9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Login Page route
app.get('/', function (request, response) {
  return response.sendFile(path.join(__dirname + '/Login.html'));
});

//Log out 
app.get("/Logout", function (request, response) {
  firebase.auth().signOut();
  console.log('Log Out Successfully');
  AuthTag = false;
  return response.redirect('BackToLogin');
});

app.get("/BackToLogin", function (request, response) {
  return response.redirect('/');
});

//Home Page route
app.get('/Home', function (request, response) {
  if (AuthTag == true) {
    response.sendFile(path.join(__dirname + '/index.html'));
  } else {
    return response.redirect('/BackToLogin');
  }
  // response.sendFile(path.join(__dirname + '/index.html'));
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     // User is signed in.
  //     // var user = firebase.auth().currentUser;
  //     // var email_id = user.email;
  //     // response.send(email_id);     
  //     // return response.sendFile(path.join(__dirname + '/index.html'));

  //   } else {
  //     // // response.sendFile(path.join(__dirname + '/Login.html'));
  //     // return response.redirect('/BackToLoginWithoutAuth');
  //     // return response.redirect('/BackToLoginWithoutAuth');
  //   }
  // });
});

//Login
app.post('/Auth', function (request, response) {
  var account = request.body.account;
  var password = request.body.password;
  firebase.auth().signInWithEmailAndPassword(account, password)
    .then((userCredential) => {
      // Signed in
      console.log("Login Success");
      AuthTag = true;
      return response.redirect('/Home');
    })
    .catch((error) => {
      //Signed in unsuccessfully
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      return response.redirect('/');
    });
});















