const div = document.getElementById("target");
const error = document.getElementById("error");
const fragment = document.createDocumentFragment();
const form = document.createElement("form");
form.method = "get";

const inputUsername = document.createElement("input");
inputUsername.type = "text";
inputUsername.name = "name";
inputUsername.id = "name";
inputUsername.placeholder = "Insert Uesrname";

const inputPwd = document.createElement("input");
inputPwd.type = "password";
inputPwd.id = "pwd";
inputPwd.placeholder = "Insert Password";

const button = document.createElement("button");
button.type = "submit";
button.textContent = "LOGIN";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputPwd.value.length < 6) {
    error.style.display = "block";
    return;
  }
  localStorage.setItem("username", inputUsername.value);
  window.location.replace("welcome.html");
});

form.append(inputUsername, inputPwd, button);
fragment.appendChild(form);
div.appendChild(fragment);

function logout() {
  window.location.replace("minitask4.html");
  localStorage.removeItem("username");
}
