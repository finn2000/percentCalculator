
var numField1 = document.getElementById("numField1"); 
var numField2 = document.getElementById("numField2");
var resultTip = document.getElementById("resultTip");
var resultBill = document.getElementById("resultBill");
var form = document.getElementById("input-values");

// Calculate    
form.addEventListener("submit", function(event) {

    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var xx = parseFloat(numField2.value);

        var tip = x * (xx / 100);
        var total = x + tip; 

        event.preventDefault();

        resultTip.value = "$" + tip;
        resultBill.value = "$" + total;
    }
});

// Clear answers
form.addEventListener("reset", function(clearAll) {
    if (resultTip.value || resultBill) {
       resultTip.value = "";
       resultBill.value = "";
    }
});