var cardList = document.querySelector(".card-list");

document.querySelector(".add-button").addEventListener("click", ()=>{
    var newCard = document.createElement("div");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    // checkBox.name = "hello";
    var label = document.createElement("label");
    label.htmlFor = "id";
    label.appendChild(document.createTextNode("hello"));
    newCard.appendChild(checkBox);
    newCard.appendChild(label);
    cardList.appendChild(newCard);
})


