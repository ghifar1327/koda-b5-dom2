const div = document.getElementById("target");
const error = document.getElementById("error");
const fragment = document.createDocumentFragment();
const form = document.querySelector("form");
form.method = "get";

const inputUsername = document.getElementById("username");
inputUsername.placeholder = "Insert Username";

const inputPwd = document.getElementById("password");
inputPwd.placeholder = "Insert Password";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputPwd.value.length < 6) {
    error.style.display = "block";
    return;
  }
  localStorage.setItem("username", inputUsername.value);
  window.location.replace("welcome.html");
});

const password = document.getElementById("password");
const showPwdToggle = document.getElementById("show");
const eye = document.querySelector(".eye");
const eyeBrow = document.querySelector(".eyebrow");
eye.style.display='none'

showPwdToggle.addEventListener("change", (e) => {
  e.preventDefault();
  if (showPwdToggle.checked) {
    eye.style.display = "block";
    eyeBrow.style.display = "none";
    password.type = "text";
    return;
  }
  eye.style.display = "none";
  eyeBrow.style.display = "block";
  password.type = "password";
});

function logout() {
  window.location.replace("minitask4.html");
  localStorage.removeItem("username");
}
