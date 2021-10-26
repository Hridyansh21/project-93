
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAaMip14ZaTAB_3S-mbGUaxdkGXkyY9u8s",
    authDomain: "kwitter-project-1527f.firebaseapp.com",
    projectId: "kwitter-project-1527f",
    storageBucket: "kwitter-project-1527f.appspot.com",
    messagingSenderId: "579251294894",
    appId: "1:579251294894:web:116109ad3c805d13ee933f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
