// Initialize Firebase
var config = {
	apiKey: "AIzaSyDurIg4ju49jQx_e5iKBLLbjTn3Q2SYPAk",
	authDomain: "bharatham-125d6.firebaseapp.com",
	databaseURL: "https://bharatham-125d6.firebaseio.com",
	storageBucket: "bharatham-125d6.appspot.com",
	};
firebase.initializeApp(config);

function getData() {
	var URLName = null;
			
	
  	var database = firebase.database();
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			console.log('User signed in');
			var welcomeString = 'Welcome '+user.displayName;
			URLName = user.displayName.toLowerCase();
			document.getElementById('welcome').innerHTML = welcomeString;
			
			URLRef = database.ref().child(URLName);
			
			URLRef.once('value', function(snapshot) {
	  			console.log(snapshot.val());

	  			document.getElementById('loadingGIF').style.visibility = "hidden";
	  			document.getElementById('dynamicFrame').innerHTML = snapshot.val();
			});
		}
		else {
			document.getElementById('welcome').innerHTML = 'Please Login to Continue';
		}
	});
}
function logOut() {
	firebase.auth().signOut().then(function() {
  	// Sign-out successful.
  	console.log("Sign Out Succesful!");
  	window.location.href = "index.html";
	}, function(error) {
  	// An error happened.
});
}