const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];
const button = document.querySelector(".checkAll");
const uncheckAll = document.querySelector(".uncheckAll");
const deleteAll = document.querySelector(".del");

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector(`[name=item]`).value;
  const item = {
    text,
    done: false,
  };
  //console.log(item);
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
            <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${
        plate.done ? "checked" : ""
      } />
            <label for="item${i}">${plate.text}</label>
            </li>
            `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; //skip unless it is an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function checkedAll() {
  items.forEach((element) => {
    element.done = true;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
function uncheckedAll() {
  items.forEach((element) => {
    element.done = false;
  });
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
function deleteAllEle() {
  items = [];
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
button.addEventListener("click", checkedAll);
uncheckAll.addEventListener("click", uncheckedAll);
deleteAll.addEventListener("click", deleteAllEle);
populateList(items, itemsList);
