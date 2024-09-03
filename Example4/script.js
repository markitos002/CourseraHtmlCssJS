//To convert celcius to farenheit        
function temperature(){
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
    }
    //To convert kilograms to pounds
function weight(){
    //KG x 2.205
    var kg = document.getElementById("kg").value;
    var p = kg * 2.205
    document.getElementById("pounds").value = p
    }
    //To convert kilometers to miles
function distance(){
    //KM * 0.621371
    var km = document.getElementById("km").value;
    var m = km * 0.621371
    document.getElementById("miles").value = m
    }
    //Add event listeners to the buttons
    document.getElementById("temperature").addEventListener("click", temperature)
    document.getElementById("weight").addEventListener("click", weight)
    document.getElementById("distance").addEventListener("click", distance)   