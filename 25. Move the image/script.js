var img = document.querySelector("img");
img.style.position = "relative";
img.style.top = "0px";
img.style.left = "0px";

document.body.addEventListener("keydown", (e) => {
  var keys = e.key;
  switch (keys) {
    case "ArrowUp":
      moveUp();
      break;

    case "ArrowDown":
      moveDown();
      break;

    case "ArrowLeft":
      moveLeft();
      break;

    case "ArrowRight":
      moveRight();
      break;
  }
});
function moveLeft() {
  img.style.left = parseInt(img.style.left) - 10 + "px";
}
function moveUp() {
  img.style.top = parseInt(img.style.top) - 10 + "px";
}
function moveRight() {
  img.style.left = parseInt(img.style.left) + 10 + "px";
}
function moveDown() {
  img.style.top = parseInt(img.style.top) + 10 + "px";
}
