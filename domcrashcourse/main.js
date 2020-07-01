let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
//Form SUbmit event
form.addEventListener("submit", addItem);
// Delete Event
itemList.addEventListener("click", removeItem);
//filter items
filter.addEventListener("keyup", filterItem);

function addItem(e) {
  e.preventDefault();
  // Get input value
  let newItem = document.getElementById("item").value;
  //Create new li element
  let li = document.createElement("li");
  li.className = "list-group-item";
  //Append text node
  li.appendChild(document.createTextNode(newItem));

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  //Appending to the list
  li.appendChild(deleteBtn);
  // appending into ItemList
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItem(e) {
  // converting input into lower case
  let text = e.target.value.toLowerCase();
  //get list
  let items = itemList.getElementsByTagName("li");
  //converting into Arrays
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
