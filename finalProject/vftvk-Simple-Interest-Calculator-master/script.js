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

//function updateRate(){
//    var rateval = document.getElementById("rate").value;
 //   document.getElementById("rate_val").innerText = rateval; }
 //modificado de  Rate <input type="range" id="rate" min="1" max="20" value="10.25" step="0.25" onchange="updateRate()"> 
 // para que se vaya actualizando el valor del rango en el input de texto


 function updateRate() {
    // Obtener el valor del control deslizante
    var rateval = document.getElementById("rate").value;
    // Mostrar el valor actualizado
    document.getElementById("rate_val").textContent = rateval;
}
        