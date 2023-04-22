const input = document.getElementById("input");

function appendnumber(event) {
  input.value += event;
}

function earse() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  var result = eval(input.value);
  input.value = result;
}
function clearInput() {
  input.value = "";
}
