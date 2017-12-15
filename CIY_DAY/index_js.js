//1. define html element:

var menuName = document.getElementById("menuName");
var quantity = document.getElementById("quantity");
var unitPrice = document.getElementById("unitPrice");
var orderAdded = document.getElementById("orderAdded");

var orderArray = []; //2. empty array

//3. create function addOrder
function addOrder(){
    var display = menuName.value + " - " + quantity.value + " - " + unitPrice.value;
    orderArray.push(display);
    
    orderAdded.innerHTML = orderArray;      
}

        // implement loop here:

    for (var i = 0; i < orderArray.length; i++){
        orderAdded.innerHTML += orderAdded.innerHTML + orderArray;
    }

//4. create function updateDisplay
var display = menuName + " - " + quantity + " - " + unitPrice;

console.log(orderArray);

/*var i = 1;
while(i<11){
    document.write ("CIY Class");
    i=i+1;
}

for (i = 0; i < 10; 1++){
 document.write("CIY CLass");
}
*/
var myArr = ["a","b", "c", "d"]
var i =0;
while(i < myArr.length){
    console.log(myArr[i]);
    i++;
}