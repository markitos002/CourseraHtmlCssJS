function compute()
{
   var p = document.getElementById("principal").value;
   var r = document.getElementById("rate").value;
   var y = document.getElementById("years").value;
   var i = p * r * y / 100;
   var amount = parseInt(p) + parseInt(i);
   var result = document.getElementById("result");
   var year = new Date().getFullYear() + parseInt(y);

    if (p <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
        
    }
    else
    {
    result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\>at an interest rate of" + "<mark>" + r + "</mark>" + "%\<br\>You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\>in the year" + "<mark>" + year + "</mark>" + "\<br\>";
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;   
}
        