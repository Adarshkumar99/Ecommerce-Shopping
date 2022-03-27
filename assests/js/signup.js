const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// event add
form.addEventListener('submit', (event) => {
	event.preventDefault();

	validate();
})

const isEmail = (emailVal) => {
	var atSymbol = emailVal.indexOf("@");
	if (atSymbol < 1) return false;
	var dot = emailVal.lastIndexOf('.');
	if (dot <= atSymbol + 2) return false;
	if (dot == emailVal.length - 1) return false;
	return true;
}
// define validate function
const validate = () => {
	const usernameVal = username.value.trim();
	const emailVal = email.value.trim();
	const phoneVal = phone.value.trim();
	const passwordVal = password.value.trim();
	const cpasswordVal = cpassword.value.trim();


	// validate username

	if (usernameVal === "") {
		setErrorMsg(username, 'username cannot be blank');
	} else if (usernameVal.length <= 2) {
		setErrorMsg(username, 'username min 3 character');
	} else {
		setSuccessMsg(username);
	}

	// email validate

	if (emailVal === "") {
		setErrorMsg(email, 'email cannot be blank');
	} else if (!isEmail(emailVal)) {
		setErrorMsg(email, 'Not a valid email');
	} else {
		setSuccessMsg(email);
	}

	// phone validate

	if (phoneVal === "") {
		setErrorMsg(phone, 'phone cannot be blank');
	} else if (phoneVal.length != 10) {
		setErrorMsg(phone, 'Not a valid number');
	} else {
		setSuccessMsg(phone);
	}


	// password validate

	if (passwordVal === "") {
		setErrorMsg(password, 'password cannot be blank');
	} else if (passwordVal.length <= 5) {
		setErrorMsg(password, 'Minimum 6 character');
	} else if (passwordVal.length >= 25) {
		setErrorMsg(password, 'Maximimum 25 character');
	} else {
		setSuccessMsg(password);
	}

	// Confirm password validate

	if (cpasswordVal === "") {
		setErrorMsg(cpassword, 'confirm password cannot be blank');
	} else if (passwordVal != cpasswordVal) {
		setErrorMsg(cpassword, 'password not matched');
	} else {
		setSuccessMsg(cpassword);
	}
}

function setErrorMsg(input, errormsgs) {
	const formController = input.parentElement;
	const small = formController.querySelector('small');
	formController.className = "form-controller error";
	small.innerText = errormsgs;
}

function setSuccessMsg(input) {
	const formController = input.parentElement;
	formController.className = "form-controller success";
}