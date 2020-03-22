
function singup(){


    var username=document.getElementById('name');
    var emai=document.getElementById('email');
    var pass=document.getElementById('password');
    var contact=document.getElementById('contact');
    var city=document.getElementById('city');

    firebase.auth().createUserWithEmailAndPassword(email.value,pass.value).then(function(response){

        firebase.database().ref('users').push({
            username:username.value,
            email:firebase.auth().currentUser.email,
            userId:firebase.auth().currentUser.uid,
            password:pass.value,
            contact:contact.value,
            city:city.value})
    })
    .catch(function(error){

        var errorCode=error.code;
        var errorMessage=error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
	window.alert("you r successfull signed up. go to login page and login");
}
