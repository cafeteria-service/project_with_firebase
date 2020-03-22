
function insert() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var contact=document.getElementById("contact").value;
	var city=document.getElementById("city").value;
	var address=document.getElementById("address").value;
	var password=document.getElementById("password").value;

    //pre built function to upload data to firebase
    //path where your data will be stored
  firebase.database().ref('user/'+contact).set({
       userName: name,
        userEmail: email,
        userContact: contact,
		userCity: city,
		userAddress: address
    });
  
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            function () {
                //this function executes when account is successfully created
                 window.location="login.html";

        }).catch(function (error) {
           //this function handles errors
            var errorMessage=error.message;
            alert(errorMessage);
        });
	 window.alert("now go to login page n login");
	
	
	
}