
   const firebaseConfig = {
      apiKey: "AIzaSyDYz9-Sy1uAdMGFi25JTjoxSVLftxB8CWM",
      authDomain: "c-93-a21ac.firebaseapp.com",
      projectId: "c-93-a21ac",
      storageBucket: "c-93-a21ac.appspot.com",
      messagingSenderId: "772462468296",
      appId: "1:772462468296:web:7f9957788c2f37460419fd"
    };
  
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
