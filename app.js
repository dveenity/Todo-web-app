let today = document.querySelector(".txt2 div:nth-child(1)");
let tomorrow = document.querySelector(".txt2 div:nth-child(2)");

today.onclick = function () {
  window.location.assign("todos list/today.html");
};

tomorrow.onclick = function () {
  window.location.assign("todos list/tomorrow.html");
};
