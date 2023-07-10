function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

var icon = document.querySelector(".icon");

if (icon) {
    icon.addEventListener("click", myFunction);
}