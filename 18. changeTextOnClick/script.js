const btn = document.getElementById("btn");

const text = document.querySelector("h1");

btn.addEventListener("click", () => {
  if (text.innerText === "The most affordable learning platform") {
    text.innerText = "PW Skills";
  } else {
    text.innerText = "The most affordable learning platform";
  }
});
