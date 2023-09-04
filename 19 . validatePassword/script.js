const btn = document.getElementById("btn");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const element = document.querySelector("form");

btn.addEventListener("click", () => {
  if (email.value.includes("@") && pass.value.length >= 8) {
    document.getElementById("msg").innerText = "Valid email and password!";
    document.getElementById("msg").style.color = "green";
  } else {
    document.getElementById("msg").innerText = "Invalid email or password!";
    document.getElementById("msg").style.color = "red";
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
});


