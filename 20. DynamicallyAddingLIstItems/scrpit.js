const skills = [
  "Github",
  "MongoDB",
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "SQL",
];

const btn = document.getElementById("btn");

const ul = document.getElementById("list");

const msg = document.getElementById("msg");

var i = 0;

btn.addEventListener("click", () => {
  
  if (skills[i]) {
    const element = skills[i];
    console.log(skills[i]);
    var entry = document.createElement("li");
    entry.innerText = element;
    ul.appendChild(entry);
    i++;
  } else {
    msg.innerText = "All items have been added.";
    console.log("All items have been added.");
  }
});
