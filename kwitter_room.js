
var firebaseConfig = {
      apiKey: "AIzaSyC3kMjqgx-0sROoxWfnwiI2XdBC3lNpO9A",
      authDomain: "kwitter-dcf22.firebaseapp.com",
      databaseURL:"https://kwitter-dcf22-default-rtdb.firebaseio.com/",
      projectId: "kwitter-dcf22",
      storageBucket: "kwitter-dcf22.appspot.com",
      messagingSenderId: "748082140210",
      appId: "1:748082140210:web:96ab4b718f8e4ddce0982b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    console.log(user_name);
document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!"


function addroom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      })
     localStorage.setItem("room_name",room_name)
     window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("room names-"+Room_names)
    row="<div class='room_name' id="+Room_names+" onclick='redirecttorooname(this.id)'> #"+Room_names+" </div> <hr/>"
    document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirecttorooname(name){
      console.log(name)
      localStorage.setItem("Room_name",name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}

