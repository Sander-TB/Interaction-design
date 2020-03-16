const form = document.querySelector(".contactForm");

form.addEventListener("submit", validateForm);

function validateForm(e) {
	event.preventDefault();

	const name = document.querySelector("#name");
	const nameError = document.querySelector("#nameError");
	const nameValue = name.value;

	const email = document.querySelector("#email");
	const emailError = document.querySelector("#emailError");
	const invalidEmailError = document.querySelector("#invalidEmailError");
	const emailValue = email.value;

	const phone = document.querySelector("#phoneNumber");
	const phoneError = document.querySelector("#phoneError");
	const phoneValue = phone.value;

	const message = document.querySelector("#message");
	const messageError = document.querySelector("#messageError");
	const messageValue = message.value;

	if (checkInputLength(nameValue) === true) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
	}

	if (checkInputLength(emailValue) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	if (checkInputLength(phoneValue) === true) {
		phoneError.style.display = "none";
	} else {
		phoneError.style.display = "block";
	}

	if (checkInputLength(messageValue) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
}

function checkInputLength(value) {
	const trimmedValue = value.trim();
	if (trimmedValue.length > 0) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	return regEx.test(email);
}
