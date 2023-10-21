let today = document.querySelector(".txt2 div:nth-child(1)");
let tomorrow = document.querySelector(".txt2 div:nth-child(2)");
let someday = document.querySelector(".txt2 div:nth-child(3)");

// adding click function to redirect to the todo list page
today.onclick = function () {
  window.location.assign("todos list/today.html");
};

tomorrow.onclick = function () {
  window.location.assign("todos list/tomorrow.html");
};

someday.onclick = function () {
  window.location.assign("todos list/someday.html");
};
