// My Work
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// document.title = "Dom Practice";
// console.log(document.body);
// console.log(document.all);
// document.all[10].textContent = "DOM Course";
// console.log(document.forms);
// console.log(document.images);

// GET Element BY ID
//console.log(document.getElementById("header-title"));
// let header = document.getElementById("header-title");
// let headerBottom = document.getElementById("main-header");
//console.log(header.title);
//console.log(header.innerText);
//header.innerHTML = `<h3>HI</h3>`;
//headerBottom.style.borderBottom = "3px solid black";

// Get Element by CLass NAme

// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "This is a Change";
// items[1].style.backgroundColor = "lightblue";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "grey";
// }

// Get elements by tag name

// let li = document.getElementsByTagName("li");
// console.log(li);
// li[1].textContent = "This is a Change";
// li[1].style.backgroundColor = "lightblue";
// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "lightgrey";
// }

// querySelector

// let header = document.querySelector("#main-header");
// header.style.borderBottom = "4px solid #ccc";
// let input = document.querySelector("input");
// input.placeholder = "Hello World";
// let submit = document.querySelector(`input[type="submit"]`);
// submit.style.backgroundColor = "Blue";
// let item = document.querySelector(".list-group-item");
// item.style.color = "Red";
// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";
// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "green";

// QuerySelector All
// let titles = document.querySelectorAll(".title");
// console.log(titles);
// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }
//Traversing the DOM
let itemList = document.querySelector("#items");
// ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode);

// Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);

// ChildNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
// itemList.children[1].style.backgroundColor = "#ccc";

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);

//lastElementCHild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = "yellow";

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);

//CreateElement

//create a div
//let newDiv = document.createElement("div");
//class
//newDiv.className = "hello";
//id
//newDiv.id = "hi";
//attr
//newDiv.setAttribute("title", "hello div");

//create Text Node
//let newDivText = document.createTextNode("Hello World");

//append Text
// newDiv.appendChild(newDivText);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";
// container.insertBefore(newDiv, h1);

//Event Listner

// let button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

//function buttonClick(e) {
//console.log("Hello");
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//   console.log(e.target);
//   console.log(e.target.classList);
//   let output = document.getElementById("output");
//   output.innerHTML = `<h3>` + e.target.id + `</h3>`;
//   console.log(e.clientX);
//   console.log(e.clientY);
//console.log(e.offsetX);
//console.log(e.offsetY);
//   console.log(e.altKey);
//   console.log(e.shiftKey);
//   console.log(e.ctrlKey);

//}
//let button = document.getElementById("button");
let output = document.getElementById("output");

//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mousemove", runEvent);
let itemInput = document.querySelector(`input[type="text"]`);
let form = document.querySelector("form");
let select = document.querySelector("select");
//itemInput.addEventListener("keydown", runEvent);
//itemInput.addEventListener("keypress", runEvent);

//itemInput.addEventListener("focus", runEvent);
//itemInput.addEventListener("blur", runEvent);
//select.addEventListener("change", runEvent);
form.addEventListener("submit", runEvent);
//itemInput.addEventListener("input", runEvent);
function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: " + e.type);
  //console.log(e.target.value);
  //output.innerHTML = `<p>` + e.target.value + `</p>`;
  //   output.innerHTML = `<h3>` + e.clientX + " " + e.clientY + `</h3>`;
}
