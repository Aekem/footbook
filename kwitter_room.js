
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBHDB2Rd5Dbx38_NZh9IOCcIC_zUhW0P_0",
      authDomain: "kwitter-c8e90.firebaseapp.com",
      projectId: "kwitter-c8e90",
      storageBucket: "kwitter-c8e90.appspot.com",
      messagingSenderId: "623831690615",
      appId: "1:623831690615:web:d4cc68c82e0710e740c572"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
