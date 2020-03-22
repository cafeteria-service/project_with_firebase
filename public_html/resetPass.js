function reset(){
     var email=document.getElementById("exampleInputEmail1").value;
	if(email !="")
	{
		firebase.auth().sendPasswordResetEmail(email).then(
		function()
		{
			window.alert("Reset mail is sent to "+ email);
				window.location.href="login.html";
		}).catch(function(error)
		{
			var errorCode=error.code;
			var errorMessage=error.message;
			window.alert("message : " + errorMessage);
		});
	}
}