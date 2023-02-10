const formName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.getElementById("phone");
const form = document.querySelector("form");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");

validate();

function validate() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    reset();

    if (formName.value == "") {
      nameError.textContent = "This field is required";
    }

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value == "") {
      emailError.textContent = "This field is required";
    } else if (!email.value.match(validRegex)) {
      emailError.textContent = "Email is not valid";
    }

    const validPhone = /^(\+91\-|0)?[789]\d{9}$/;
    if (phone.value == "") {
      phoneError.textContent = "This field is required";
    } else if (!phone.value.match(validPhone)) {
      phoneError.textContent = "Phone number is invalid";
    }
  });
}

function reset() {
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
}
