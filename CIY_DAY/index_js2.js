var myObj = {
    "name": "CIY",
    "age":23,
    "birthdate":"1988-03-03",
    "details": {
        "account_number": 1234567,
        "account_name": "CIY"
    },
    "past_jobs": ["Engineer", "Finance", "Admin"]
};
var myOrders = [{
    "menu_name":"Chicken",
    "qty": 4,
    "unit_price": 20
}, {
    "menu_name_2":"coke",
    "qty": 1,
    "unit_price": 5
}, {
    "menu_name":"sprite",
    "qty": 1,
    "unit_price": 5
}];
var totalOrder = myOrders.length;
for(var i = 0;i < totalOrder;i++){
    var myOrder = myOrders[i];
    orderAdded.innerHTML = orderAdded.innerHTML + "> " + myOrder.menu_name + " - " + myOrder.qty + "<br>";
}
Add Comment Collapse