var display = document.getElementById("display");
var textToAdd = document.getElementById("text-to-add");
var positionToSplice = document.getElementById("position-to-splice");

var itemArray = ["apple", "banana", "cherry"];

function updateDisplay() {
    console.log(itemArray);
    display.innerHTML = itemArray;
}
updateDisplay(); // Update the display for the first time when the script loads


/* array.push(newItem) adds the newItem to the end of the array
 * example: ["apple", "banana", "cherry", newItem]
 * <button onclick="pushItem()">end</button> */
function pushItem() {
    console.log("add to last");

    // TODO(01) in line 21 write: itemArray.push(textToAdd.value);


    updateDisplay();
}

/* array.unshift(newItem) adds the newItem to the front of the array
 * example: [newItem, "apple", "banana", "cherry"]
 * <button onclick="unshiftItem()">front</button> */
function unshiftItem() {
    console.log("add to first");

    // TODO(02) in line 33 write: itemArray.unshift(textToAdd.value);

itemArray.unshift()
    updateDisplay();
}

/* array.pop() removes the last item from the array
 * example: ["banana", "cherry"]
 * <button onclick="shiftItem()">first</button> */
function popItem() {
    console.log("remove last item");

    // TODO(03) in line 45 write: itemArray.pop();


    updateDisplay();
}

/* array.shift() removes the first item from the array
 * example: ["apple", "banana"]
 * <button onclick="popItem()">last</button> */
function shiftItem() {
    console.log("remove first item");

    // TODO(04) in line 57 write: itemArray.shift();

itemArray.shift();
    updateDisplay();
}

/* array.splice(index, itemsToRemove, itemToAdd) targets a specific position in the array
 * it can add and/or remove items from the index position
 * */

/* array.splice(index, 0, item) adds an item into the array
 * <button onclick="spliceAddItem()">Add</button> */
function spliceAddItem() {
    var index = positionToSplice.value;
    console.log("insert at index: ", index);

    // TODO(05) in line 73 write: itemArray.splice(index, 0, textToAdd.value);


    updateDisplay();
}

/* array.splice(index, 1) removes an item from the array
 * <button onclick="spliceRemoveItem()">Remove</button> */
function spliceRemoveItem() {
    var index = positionToSplice.value;
    console.log("remove at index: ", index);

    // TODO(06) in line 85 write: itemArray.splice(index,1);

    
    updateDisplay();
}