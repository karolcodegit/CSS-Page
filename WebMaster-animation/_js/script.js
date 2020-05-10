var button = document.querySelector("button");
button.addEventListener("click", change, false);

function change() {
    var words = document.querySelector("ul");
    if (this.textContent == "Wyłącz") {
        this.textContent = "Włącz";
        words.style = "opacity:0";
    } else {
        this.textContent = "Wyłącz";
        words.style = "opacity:1";
    }

    /*  const letter = document.querySelectorAll("li");
    for (var i = 0; i < letter.length; i++) {
        letter[i].classList.toggle("off");
    } */
}
