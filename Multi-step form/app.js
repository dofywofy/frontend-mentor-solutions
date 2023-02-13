const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const form = document.querySelector("#form-item");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");

import { EMAIL_REGEX, IN_MOBILE_REGEX } from "./constant.js";

validate();

function validate() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    reset();

    if (name.value == "") {
      nameError.textContent = "This field is required";
    }

    if (email.value == "") {
      emailError.textContent = "This field is required";
    } else if (!email.value.match(EMAIL_REGEX)) {
      emailError.textContent = "Email is not valid";
    }

    if (phone.value == "") {
      phoneError.textContent = "This field is required";
    } else if (!phone.value.match(IN_MOBILE_REGEX)) {
      phoneError.textContent = "Phone number is invalid";
    }
  });
}

function reset() {
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
}

function handleSubmit(e) {
  e.preventDefault();

  let data = {};
  data.name = document.querySelector("#name").value;
  data.email = document.querySelector("#email").value;
  data.phone = document.querySelector("#phone").value;

  let jsonStringData = JSON.stringify(data);
  console.log(jsonStringData);
}

form.addEventListener("submit", handleSubmit);
