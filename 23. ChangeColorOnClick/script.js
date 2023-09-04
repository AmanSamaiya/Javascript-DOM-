const btn = document.getElementById("btn");

const colors = ["red", "yellow", "green", "blue", "aqua", "purple"];

const changeColor = () => {
  var randomColor = Math.round(Math.random() * (colors.length - 1));

  document.body.style.backgroundColor = colors[randomColor];
};

btn.addEventListener("click", changeColor);
