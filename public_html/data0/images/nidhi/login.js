
function login(){

    var userEmail = document.getElementById("exampleInputEmail1").value;
    var userPass = document.getElementById("exampleInputPassword1").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(
    function(){
        window.location.href="home.html";
        }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
}
  