Sortable.create(list, {
    animation: 150,
    // sort: true
    ghostClass: 'ghost'
});

var card = document.querySelector(".card");
var cardList = document.querySelector(".card-list");

var cardCount = 0;

document.querySelector(".add-button").addEventListener("click", ()=>{
    let temp = `sortable${cardCount}`;
    
    var newCard = document.createElement("div");
    newCard.classList.add("card");

    var newHeader = document.createElement("div");
    newHeader.classList.add("card-header")
    var newTitle = document.createElement("input");
    newTitle.type = "text";
    newTitle.classList.add("card-title");
    newTitle.placeholder = "Card Title";
    var newRemoveCardButton = document.createElement("button");
    newRemoveCardButton.classList.add("remove-card-button");
    newRemoveCardButton.textContent = "X"
    var newTodoList = document.createElement("div");
    newTodoList.classList.add("todo-list");
    newTodoList.id = temp;
    var newAddButton = document.createElement("button");
    newAddButton.classList.add("add-item");
    newAddButton.textContent = "+";
    newHeader.appendChild(newTitle);
    newHeader.appendChild(newRemoveCardButton);
    newCard.appendChild(newHeader);
    newCard.appendChild(newAddButton);
    newCard.appendChild(newTodoList);
    cardList.appendChild(newCard);

    Sortable.create(eval(temp), {
        animation: 150,
        // sort: true  
        ghostClass: 'ghost'
    });

    cardCount++;

    
})

// cardList.addEventListener("dragstart", (e) => {
//     if(e.target.classList.contains("todo-icon")){
//         const dragElem = e.target.parentElement;
//         var clone = dragElem.cloneNode(true);
//         console.log(clone);
//         clone.classList.add("dragging");
//         document.body.appendChild(clone);

//         // e.dataTransfer.setData("text/plain", e.target.id);

//         e.dataTransfer.setDragImage(clone, 0, 0);
//         console.log("hello")

//     }
// })

cardList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add-item")){
        var todoList = e.target.parentElement.querySelector(".todo-list");
        var newItem = document.createElement("div");
        newItem.classList.add('todo');
        //add drag icon
        var dragIcon = document.createElement("img");
        dragIcon.src = "src/grip-lines-solid.svg";
        dragIcon.classList.add("todo-icon");
        dragIcon.draggable = "true";
        //add checkBox
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add('todo-check');
        //add textbox
        var textBox = document.createElement("input");
        textBox.type = "text";
        textBox.classList.add('todo-desc');
        //add remove button
        var removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.className = "remove-button";
        newItem.appendChild(dragIcon);
        newItem.appendChild(checkBox);
        newItem.appendChild(textBox);
        newItem.appendChild(removeButton);
        // newItem.draggable = "true";
        todoList.appendChild(newItem);
        // cursor automatically selects new text box
        textBox.focus();
        textBox.select();

        
    }
    if(e.target.classList.contains("remove-button")){
        e.target.parentElement.remove();
    }
    if(e.target.classList.contains("remove-card-button")){
        e.target.parentElement.parentElement.remove();
    }
});

// var todoList = document.querySelector(".todo-list");

// document.querySelector(".add-item").addEventListener("click", ()=>{
//     var newItem = document.createElement("div");
//     newItem.classList.add('todo')
//     //add checkBox
//     var checkBox = document.createElement("input");
//     checkBox.type = "checkbox";
//     checkBox.classList.add('todo-check')
//     //label (not used)
//     var label = document.createElement("label");
//     label.htmlFor = "id";
//     //add textbox
//     var textBox = document.createElement("input");
//     textBox.type = "text";
//     textBox.classList.add('todo-desc')
//     //add remove button
//     var removeButton = document.createElement("button");
//     removeButton.textContent = "X";
//     removeButton.className = "remove-button"
//     label.appendChild(document.createTextNode("hello"));
//     newItem.appendChild(checkBox);
//     newItem.appendChild(textBox);
//     newItem.appendChild(removeButton);
//     todoList.appendChild(newItem);
//     // cursor automatically selects new text box
//     textBox.focus();
//     textBox.select();
// })

// todoList.addEventListener("click", (e) => {
//     if(e.target.classList.contains("remove-button")){
//         e.target.parentElement.remove();
//     }
// });

// todoList.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("todo-check")){
//         var clone = e.target.parentElement;
//         clone.classList.add('todo-done')

//         // document.querySelector(".done-list").appendChild(clone);
//     }
// });