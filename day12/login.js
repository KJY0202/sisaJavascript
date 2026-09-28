const loginId = document.querySelector("#login_id");
const loginPassword = document.querySelector("#login_password");
const loginButton = document.querySelector("#login_button");
const nogolbaeng = document.querySelector(".nogolbaeng");
const checkbox = document.querySelector(".checkbox");
const overeighttext = document.querySelector(".overeighttext");
const agree = document.querySelector(".agree");
const success = document.querySelector(".success");

loginButton.addEventListener("click", () => {
  if (!loginId.value.includes("@")) {
    nogolbaeng.style.display = "block";
  } else {
    nogolbaeng.style.display = "none";
  }
});

loginButton.addEventListener("click", () => {
  if (loginPassword.value.length < 8) {
    overeighttext.style.display = "block";
  } else {
    overeighttext.style.display = "none";
  }
});

loginButton.addEventListener("click", () => {
  if (!checkbox.checked) {
    agree.style.display = "block";
  } else {
    agree.style.display = "none";
  }
});

loginButton.addEventListener("click", () => {
  if (!loginId.value.includes("@")) {
    loginId.style.border = "1px solid red";
  } else {
    loginId.style.border = "none";
  }
});

loginButton.addEventListener("click", () => {
  if (loginPassword.value.length < 8) {
    loginPassword.style.border = "1px solid red";
  } else {
    loginPassword.style.border = "none";
  }
});

loginButton.addEventListener("click", () => {
  if (
    loginPassword.value.length > 8 &&
    loginId.value.includes("@") &&
    checkbox.checked
  ) {
    success.style.display = "block";
  } else {
    success.style.style = "none";
  }
});
