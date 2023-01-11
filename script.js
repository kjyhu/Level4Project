function initialize() {
    groceryItem = document.getElementById("list")
    groceryList = [];
    grocery = document.getElementById("item");
    number = document.getElementById("index");
    display()
}

function addGrocery() {
    dupe = false;
    for (groceries of groceryList) {
        if (grocery.value === groceries) {
            dupe = true;
        }
    }
    if (grocery.value != "" && dupe === false) {
        groceryList.push(grocery.value)
    }
    else if (dupe) {
        alert("The item you are trying to add is already on the list")
    }
    else {
        alert("Please input a provide input")
    }
    grocery.value = ""
    display()
}

function deleteGrocery() {
    groceryList.splice(number.value - 1, 1);
    display()
}

function moveUp() {
    if (groceryList.length >= 2 && number.value > 1) {
        temp = groceryList.splice(number.value - 1, 1)
        groceryList.splice(number.value - 2, 0, temp);
        number.value = number.value - 1
    }
    display()
}

function moveDown() {
    if (groceryList.length >= 2 && number.value < groceryList.length) {
        temp = groceryList.splice(number.value - 1, 1)
        groceryList.splice(number.value, 0, temp);
        number.value = parseFloat(number.value) + 1
    }
    display()
}

function display() {
    groceryItem.innerHTML = "";
    for (i = 0; i < groceryList.length; i++) {
        groceryItem.innerHTML += "<br>" + (i + 1) + ": " + groceryList[i] + "<br>";
    }
    index.max = groceryList.length
}