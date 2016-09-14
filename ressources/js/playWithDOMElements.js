var x = document.getElementsByClassName("crazy");
console.log("Content loaded: Now what do we have here to play with?",x);
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
}


console.log("Modernizr",Modernizr);
