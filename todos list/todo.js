let inserting = document.getElementById("inserting");
let listing = document.querySelector(".listing");
let box = document.querySelector(".box2");

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

function savingList() {
  localStorage.setItem("data", listing.innerHTML);
  displayData();
}
function displayData() {
  let save = localStorage.getItem("data");
  listing.innerHTML = save;
}
window.onload = displayData;
