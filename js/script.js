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

//Creo l'evento per generare il biglietto
genButton.addEventListener("click", function(){
  const userName = inputUserName.value.trim();
  const kmsTo = inputKmsTo.value;
  const ageRange = inputAgeRange.value;
  //Verifico la validità dei dati inseriti
  if((userName.length !== 0) && (kmsTo > 0) && (ageRange !== "seleziona")) {
    // Creo le mie variabili e faccio le operazioni per calcolare offerta e prezzo
    let price = 0.21 * kmsTo;
    let offer = "Biglietto standard";

    if(ageRange === "minorenne") {
      price *= 0.8;
      offer = "Biglietto scontato";
    } 
    
    else if(ageRange === "over65") {
      price *= 0.6;
      offer = "Biglietto scontato";
    }
    //Creo un numero random da 1 a 9 per la carrozza
    let wagon = Math.random() * 9 + 1;
    wagon = Math.floor(wagon)    

    //stampo i dati su pagina nella sezione your-ticket
    phUserNameTicket.innerText = (userName);
    phOfferTicket.innerText = (offer);
    phWagonTicket.innerText = (wagon);
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