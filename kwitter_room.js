
const firebaseConfig = {
      apiKey: "AIzaSyC3kMjqgx-0sROoxWfnwiI2XdBC3lNpO9A",
      authDomain: "kwitter-dcf22.firebaseapp.com",
      projectId: "kwitter-dcf22",
      storageBucket: "kwitter-dcf22.appspot.com",
      messagingSenderId: "748082140210",
      appId: "1:748082140210:web:96ab4b718f8e4ddce0982b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="WELCOME "

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

