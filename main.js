function verifyAge() {
	var inputAge = document.getElementById('IDage').value;
	if (inputAge <= 17) {
		window.alert('Oops! You are not eligible to vote.');
	}
	else {
		window.alert('Welcome! You are eligible to vote.');
	}
}