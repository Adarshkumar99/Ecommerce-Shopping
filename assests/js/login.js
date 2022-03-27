var attempt = 3;

function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "" && password == "") {
		alert("Please fill username and password");
		return false;
	} else if (username == "") {
		alert("username cannot be blank");
		return false;
	} else if (password == "") {
		alert("password must be filled");
		return false;
	} else if (username == "adarsh" && password == "adarsh123") {
		alert("Login successfully");
		window.location = "index.html";
		return false;
	} else {
		attempt--;
		alert("Wrong Username and Password You have left " + attempt + " attempt");
		if (attempt == 0) {
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}