//minitask1
const showPwdToggle = document.querySelector("#show");
const pwdInput = document.querySelector("#pwd");
const eyebrow = document.querySelector(".password > img:first-of-type");
const eye = document.querySelector(".password > img:last-of-type");
showPwdToggle.addEventListener("change", () => {
  if (showPwdToggle.checked) {
    pwdInput.type = "text";
    eye.style.display = "block";
    eyebrow.style.display = "none";
  } else {
    pwdInput.type = "password";
    eye.style.display = "none";
    eyebrow.style.display = "block";
  }
});
// minitask 2
const showHamburgerToggle = document.getElementById("hamburgerToggle");
const hamburger = document.querySelector(".hamburger>img:first-of-type");
const X = document.querySelector(".hamburger>img:last-of-type");
X.style.display = "none";
const modal = document.querySelector(".side-modal");
showHamburgerToggle.addEventListener("change", () => {
  if (showHamburgerToggle.checked) {
    hamburger.style.display = "none";
    X.style.display = "block";
    modal.style.display = "block";
  } else {
    hamburger.style.display = "block";
    X.style.display = "none";
    modal.style.display = "none";
  }
});

