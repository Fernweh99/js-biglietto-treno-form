// Richiamo ciò che mi serve
const genButton = document.getElementById("generate");
const resButton = document.getElementById("restore");

// Dichiaro le variabili
let inputUserName = document.getElementById("user-name");
let inputKmsTo = document.getElementById("trip-kms");
let inputAgeRange = document.getElementById("age-range");

genButton.addEventListener("click", function(){
  const userName = inputUserName.value;
  const kmsTo = inputKmsTo.value;
  const ageRange = inputAgeRange.value;
})

resButton.addEventListener("click", function(){
  inputUserName.value = "";
  inputKmsTo.value = "";
  inputAgeRange.value = "";
})