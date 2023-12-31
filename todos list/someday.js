let inserting = document.getElementById("inserting");
let listing = document.querySelector(".listing");
let box = document.querySelector(".box2");

// add input value to todo list
function addTask() {
  if (inserting.value === "") {
    alert("input something");
  } else {
    let newTd = document.createElement("li");
    newTd.innerHTML = inserting.value;
    listing.appendChild(newTd);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newTd.appendChild(span);
  }
  inserting.value = "";
  savingList();
}

// add listener to determine element clicked and run a function
listing.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savingList();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savingList();
    }
  },
  false
);

// save todo list to user browser storage with localStorage
function savingList() {
  localStorage.setItem("accept", listing.innerHTML);
  displayData();
}
function displayData() {
  let save = localStorage.getItem("accept");
  listing.innerHTML = save;
}
window.onload = displayData;
