const topPlayersTitle = document.getElementById("top-player-title");
topPlayersTitle.style.color = "rgb(255, 165, 0)"; 

const players = document.getElementsByClassName("player");
for (const player of players) {
    player.style.backgroundColor = "rgb(245,245,245)";
    player.style.padding = ".5rem";
    player.style.borderRadius = ".5rem";
}

//  add list item

document.getElementById("add-list").addEventListener("click", function () {
    const newList = document.createElement("li");
    newList.classList.add("list");
    newList.innerText = "This list is Created by JavaScript."

    document.getElementById("parent-list").appendChild(newList);
});

// remove list item

document.getElementById("remove-list").addEventListener("click", function () {
    const parenList = document.getElementById("parent-list");
    const listItems = document.getElementsByClassName("list");
    for (const list of listItems) {
        parenList.removeChild(list);
    }
})


// increase input vlaue using javascript

document.getElementById("add-value").addEventListener("click", function () {
    const input = document.getElementById("number-count");
    const inputText = input.value;
    const inputNumberValue = parseInt(inputText);
    input.value = inputNumberValue + 1;
    const addValueBtn = document.getElementById("add-value");
    if (input.value == 5) {
        addValueBtn.setAttribute("disabled", true);
    }
    
})  