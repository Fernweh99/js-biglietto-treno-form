// Richiamo ciò che mi serve
// Bottoni
const genButton = document.getElementById("generate");
const resButton = document.getElementById("restore");
// Input
const inputUserName = document.getElementById("user-name");
const inputKmsTo = document.getElementById("trip-kms");
const inputAgeRange = document.getElementById("age-range");
// Paragrafi
let phUserNameTicket = document.getElementById("ticket-username");
const phOfferTicket = document.getElementById("ticket-offer");
const phWagonTicket = document.getElementById("ticket-wagon");
const phCodTicket = document.getElementById("ticket-cod");
const phPriceTicket = document.getElementById("ticket-price");
//section
const yourTicket = document.getElementById("your-ticket")

genButton.addEventListener("click", function(){
  const userName = inputUserName.value.trim();
  const kmsTo = inputKmsTo.value;
  const ageRange = inputAgeRange.value;
  let price = 0.21 * kmsTo;

  if((userName.length !== 0) && (kmsTo.length !== 0) && (ageRange !== "seleziona")) {

    if(ageRange === "minorenne") price *= 0.8;
    
    else if(ageRange === "over65") price *= 0.6;
    
    phUserNameTicket.innerText = (userName);
    phOfferTicket.innerText = ("standard");
    phWagonTicket.innerText = ("5");
    phCodTicket.innerText = ("91234");
    phPriceTicket.innerText = (price).toFixed(2) + "€";
    
    yourTicket.classList.add("d-block");
    
  }else {
    alert("Per favore messere, compili bene i dati!")
  }
  })

  
resButton.addEventListener("click", function(){
  inputUserName.value = "";
  inputKmsTo.value = "";
  inputAgeRange.value = "seleziona";

  yourTicket.classList.remove("d-block")
})