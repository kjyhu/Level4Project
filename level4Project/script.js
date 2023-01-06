function initialize() {
    groceryItem = document.getElementById("list")
    groceryList = [];
    grocery = document.getElementById("item");
    display()
}

function addGrocery() {
    groceryList.push(grocery.value)
    display()
}

function display() {
    groceryItem.innerHTML = "";
    for (i = 0; i < groceryList.length; i++) {
        groceryItem.innerHTML += "<br>" + (i + 1) + ": " + grocery[i];
    }
}