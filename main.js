const button = document.getElementById('submitButton');

button.addEventListener('click', evenOrOdd);

function evenOrOdd () {
let input = Number(document.getElementById('textInput').value);
let result;

if (input % 2 == 0) {
result = "even";
} else {
result = "odd";
}
document.getElementById('para').textContent = input + " is an " + result + " number.";
}