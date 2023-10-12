let loader = document.querySelector(".lds-ellipsis");
let today = document.querySelector(".txt2 div:nth-child(1)");

window.onload = function () {
  loader.style.display = "none";
};

today.onclick = function () {
  window.location.assign("todos list/today.html");
};
