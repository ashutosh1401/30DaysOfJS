const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");
// Interpolated
console.log("Hi this is a %s string 🍔", "interpolated");
// Styled
console.log("%c This is a example text", "font-size: 40px;color: red;");
// warning!
console.warn("warning");
// Error :|
console.error("Their is an error");
// Info
console.info("this is information");
// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "This is Wrong!!");
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("Wes");
console.count("Wes");
console.count("steve");
console.count("Wes");
console.count("steve");
console.count("Wes");

console.count("steve");
console.count("steve");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log({ data });
  });
