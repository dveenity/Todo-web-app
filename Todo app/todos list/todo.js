let inserting = document.getElementById("inserting");
let listing = document.querySelector(".listing");

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
}

listing.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
