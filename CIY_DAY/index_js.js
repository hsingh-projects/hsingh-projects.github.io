//1. define html element:
var menuName = document.getElementById("menuName");
var quantity = document.getElementById("quantity");
var unitPrice = document.getElementById("unitPrice");
var orderAdded = document.getElementById("orderAdded");
var imageUrl = document.getElementById("menuImage");

var orderArray = []; //2. empty array

//3. create function addOrder
function addOrder(){
    var menuItem = {
        "image_url": imageUrl.value,
        "menu_name": menuName.value,
        "qty": quantity.value,
        "unit_price": unitPrice.value
    };    

    orderArray.push(menuItem);

    //store orderArray into localstorage;
    //1. transform into string:
    var orderArrayAsString = JSON.stringify(orderArray);
    window.localStorage.setItem("_myOrderItems", orderArrayAsString);

    orderAdded.innerHTML = "";
    for(var i = 0;i < orderArray.length;i++){
        var item = orderArray[i];

        orderAdded.innerHTML = orderAdded.innerHTML + 
        orderTemplate(item.image_url, item.menu_name, item.qty, item.unit_price);
    } 
}

//1. get items from localStorage:
var myItemFromLocalStorage = window.localStorage.getItem("_myOrderItems");
//2. transform it back to Object Arr
var myOrderItemsObj = JSON.parse(myItemFromLocalStorage);
//3. display it to web page
for(var i = 0;i < myOrderItemsObj.length; i++){
    var item = myOrderItemsObj[i];
    orderAdded.innerHTML = orderAdded.innerHTML +
    orderTemplate(item.image_url, item.menu_name, item.qty, item.unit_price);
}

orderArray = myOrderItemsObj;

//4. create function updateDisplay
//var display = menuName + " - " + quantity + " - " + unitPrice;

function orderTemplate(img, menuname, qty, unitprice){
    var template = '<div class="media">' +
        '<div class="media-left"><img src="' + img + '" alt=""></div>' +
        '<div class="media-body">' +
            '<h4 class="media-heading">' + menuname + '</h4>' +
            'Quantity: <span>' + qty + '</span><br>' +
            'Unit Price: <span>S$' + unitprice + '</span><br>' +
        '</div>' +
    '</div>';

    return template;
}


//window.localStorage.getItem();
//window.localStorage.setItem();

//window.localStorage.setItem("_testing", "This is from local storage");
//var fromLS = window.localStorage.getItem("_testing");
//console.log(fromLS);


/*var orderItems = [
    {
        "menu":"chicken 1",
        "qty":2    
    },
    {
        "menu":"chicken 2",
        "qty":2    
    },
    {
        "menu":"chicken 3",
        "qty":2    
    }
];

//From object to string
var objToString = JSON.stringify(orderItems);
//console.log(objToString);

//from string to object
//var stringToObj = JSON.parse(objToString);
//console.log(stringToObj);

//window.localStorage.setItem("_myCurrentOrder", objToString);

var myCurrentOrder = window.localStorage.getItem("_myCurrentOrder");
var myCurrentOrderObj = JSON.parse(myCurrentOrder);
console.log(myCurrentOrderObj);*/