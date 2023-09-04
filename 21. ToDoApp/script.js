const btn = document.getElementById("btn");

const ul = document.getElementById("list");

const addItem = () => {
  const e = document.getElementById("inputs").value;
  var entry = document.createElement("li");
  entry.innerText = e;
  ul.appendChild(entry);
 
};

btn.addEventListener("click", addItem);
