// const button = document.querySelector("random");
// var result = [];

// button.addEventListener("click", random, false);

// //funkcja odpowiedzialna za losowanie
// // function random() {
// //     // if (result.length === 6) return;
// //     for (var i = 0; i < 6; i++) {
// //         const wynikLosowania = Math.floor(Math.random() * 49 + 1);
// //         const
// //     }
// //     result.push();
// //     // if (result.length === 6) return;
// //     // const wynikLosowania = Math.floor(Math.random() * 49 + 1);

// //     // for (var i = 0; i < result.length; i++) {
// //     //     if (wynikLosowania === result[i]) {
// //     //         return random();
// //     //     }
// //     // }
// //     // for (var i = 0; i < 6; i++) {}

// //     // const div = document.createElement("div");

// //     // div.textContent = wynikLosowania;

// //     // document.body.appendChild(div);

// //     // result.push(wynikLosowania);
// // }
var date = new Date();
var dateTaday = document.querySelector("#dateToday");
dateToday.innerHTML = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

var button = document.querySelector("button");
var circle = document.querySelector(".circle");

var result = [];

button.addEventListener("click", addCircle, false);

function addCircle() {
    if (result.length === 6) {
        return;
    }

    for (var i = 0; i < 6; i++) {
        do {
            var random = Math.floor(Math.random() * 49 + 1);
            if (random === result[i]) {
                return addCircle();
            }
        } while (result.includes(random));
        result.push(random);
    }

    for (var i = 0; i < result.length; i++) {
        var ball = document.createElement("div");
        ball.className = "ball";
        ball.textContent = result[i];
        circle.appendChild(ball);
    }
}
