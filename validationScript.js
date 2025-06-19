let inputField = document.getElementById("inputField");
let button = document.getElementById("button");
inputRegex = /^[a-zA-Z0-9]+$/;

inputField.addEventListener("blur", function (event) {
  if (!inputRegex.test(inputField.value)) {
    alert("Please only input alphanumeric characters (a-z 0-9)");
    event.preventDefault();
  }
});

button.addEventListener("click", function (event) {
  if (!inputRegex.test(inputField.value)) {
    alert("Please only input alphanumeric characters (a-z 0-9)");
  } else {
    alert("Form Submission Complete");
  }
});
