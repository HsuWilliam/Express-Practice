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

  function logout() {
    firebase.auth().signOut();
  }