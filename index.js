//JavaScript for index.html
var button = document.getElementById("submitBtn");

console.log(button);

function showForm (){
    document.getElementById('summary').style.display='none';
    document.getElementById('myForm').style.display='block';
    document.getElementById('back').innerHTML = "Click to Return to the Previous Screen:";
    document.getElementById('backButton').style.display='block';
}
function resetPage(){
    window.location.reload();
}
var clientName = document.getElementById("inputName");
console.log(clientName);

var clientEmail = document.getElementById("inputEmail3");
console.log(clientEmail);

var clientPhone = document.getElementById("inputPhone");
console.log(clientPhone);

function field() {
    var x = document.getElementById("inputName");
    x.value = x.value.toUpperCase();
}

function filling() {
    clientName.style.background = "lightblue";
    clientEmail.style.background = "lightblue";
    clientPhone.style.background = "lightblue";
    textarea.style.background = "lightblue";
}

