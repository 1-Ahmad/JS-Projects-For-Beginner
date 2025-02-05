let nameError = document.querySelector("#name-error");
let phoneError = document.querySelector("#phone-error");
let emailError = document.querySelector("#email-error");
let messageError = document.querySelector("#message-error");
let submitError = document.querySelector("#submit-error");
function validateName() {
  let name = document.querySelector("#contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return 0;
  }
  if (!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    nameError.innerHTML = "Write Full Name";
    return 0;
  }
  nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return 1;
}
function validatePhone() {
  let phone = document.querySelector("#contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "phone is required";
    return 0;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "phone should be 10 digits";
    return 0;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please";
    return 0;
  }
  phoneError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return 1;
}
function validateEmail() {
  let email = document.querySelector("#contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return 0;
  }
  // if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  if (!email.match(/^(\w*\d*)+@\w+\.com/)) {
    emailError.innerHTML = "Email Invalid";
    return 0;
  }
  emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return 1;
}
function validateMessage() {
  let textarea = document.querySelector("#contact-message").value;
  let required = 30;
  let left = required - textarea.length;
  if (left > 0) {
    messageError.innerHTML = left + "more character required";
    return 0;
  }
  messageError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return 1;
}

document.querySelector("form").onsubmit = (e) => {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    e.preventDefault();
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return 0;
  }
};
