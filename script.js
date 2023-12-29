var card = document.querySelector(".card");
var cardList = document.querySelector(".card-list");

document.querySelector(".add-button").addEventListener("click", ()=>{
    var newCard = document.createElement("div");
    newCard.classList.add("card");
    var newTitle = document.createElement("input");
    newTitle.type = "text";
    newTitle.classList.add("card-title");
    newTitle.placeholder = "Card Title";
    var newTodoList = document.createElement("div");
    newTodoList.classList.add("todo-list");
    var newAddButton = document.createElement("button");
    newAddButton.classList.add("add-item");
    newAddButton.textContent = "+";
    newCard.appendChild(newTitle);
    newCard.appendChild(newTodoList);
    newCard.appendChild(newAddButton);
    cardList.appendChild(newCard);
})

cardList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add-item")){
        var todoList = e.target.parentElement;
        var newItem = document.createElement("div");
        newItem.classList.add('todo')
        //add checkBox
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add('todo-check')
        //label (not used)
        var label = document.createElement("label");
        label.htmlFor = "id";
        //add textbox
        var textBox = document.createElement("input");
        textBox.type = "text";
        textBox.classList.add('todo-desc')
        //add remove button
        var removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.className = "remove-button"
        label.appendChild(document.createTextNode("hello"));
        newItem.appendChild(checkBox);
        newItem.appendChild(textBox);
        newItem.appendChild(removeButton);
        todoList.appendChild(newItem);
        // cursor automatically selects new text box
        textBox.focus();
        textBox.select();
    }
    if(e.target.classList.contains("remove-button")){
        e.target.parentElement.remove();
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