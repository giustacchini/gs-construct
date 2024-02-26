function respFunc() {
    var x = document.getElementById("homeNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else
        x.className = "navbar";
}