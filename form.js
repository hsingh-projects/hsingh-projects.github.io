
var clientName = document.getElementById("inputName");
console.log(clientName);

var clientEmail = document.getElementById("inputEmail3");
console.log(clientEmail);

var clientPhone = document.getElementById("inputPhone");
console.log(clientPhone);

function formField() {
    var x = document.getElementById("inputName");
    x.value = x.value.toUpperCase();
}
console.log(formField);

function fillingField() {
    clientName.style.background = "lightyellow";
    clientEmail.style.background = "lightyellow";
    clientPhone.style.background = "lightyellow";
    textarea.style.background = "lightyellow";
}

function activateButton() {
    if(clientName.checked){
        document.getElementById("Button").disabled = false;
    } else{document.getElementById("Button").disabled = true;
}
    


/*
If(agreeCb.checked){
    submitBtn.disabled = false;
    message.innerHTML = "";
}
else {
    submitBtn.disabled = true;
    message.innerHTML = "Please agree to the terms"
}

else {
 submitBtn.disabled = true;
 message.innerHTML = "Please agree to the terms";
}




}
/*
function checkValue() {
    if (!clientName.checkValidity()) {
        document.getElementById("submitBtn").disabled = false;
    } else {
        submitBtn.disabled = true;
        message.innerHTML = "Please agree to the terms";
    }
*/

var clientName = document.getElementById("inputName");
    if (!clientName.checkValidity()) {
        document.getElementById("submitBtn").innerHTML = submitBtn.validationMessage;
    } else {
        document.getElementById("submitBtn").disabled = false;
    } 
} 

/*<pre style="word-wrap: break-word; white-space: pre-wrap;">{"result":"success","row":7}</pre>

function checkAnswer() {
    if(clientPhone == '+65' +  ){
        message.innerHTML ="Correct!";
    }
    //*else if(guessInput.value == ""){
        message.innerHTML ="Please Answer the Question";
    }else {
        message.innerHTML = "Sorry the answer is incorrect.";
    }

/* Desired answer
var answer = "cairo";


function checkAnswer() {
    if(guessInput.value == "cairo"){
        message.innerHTML ="Correct!";
    }else if(guessInput.value == ""){
        message.innerHTML ="Please Answer the Question";
    }else {
        message.innerHTML = "Sorry the answer is incorrect.";
    }

    function updateDisplay();
    
    /* get the input text value and convert it to lower case, so that it matches our answer */
    // TODO (01) in line 14 write: var guess = guessInput.value.toLowerCase();


    /* If the user has input "cairo", we want to display a "correct" message in the HTML */
    /* TODO (02) in line 22 to 24 write the following conditional statement:
       if (guess == answer) {
           message.innerHTML = "That is correct!";
       }
     */




    /* If the user has input anything OTHER THAN "cairo", we want to display a "wrong" message in the HTML */
    /* TODO (03) in line 32 to 34 write the following conditional statement:
       else {
           message.innerHTML = "Please try again";
       }
     
       /*console.log(numberOfInputboxesFilled);


document.getElementById('myForm').addEventListener('change', onChange, false);

       */
