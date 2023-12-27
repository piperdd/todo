var cardList = document.querySelector(".card-list");

document.querySelector(".add-button").addEventListener("click", ()=>{
    var newCard = document.createElement("div");
    newCard.appendChild(document.createTextNode("Hello"));
    cardList.appendChild(newCard);
})


