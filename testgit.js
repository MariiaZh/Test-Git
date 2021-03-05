let a, b, c;
let button = document.getElementById("color");

button.addEventListener("click", changeColor);

function changeColor() {

    a = getRandomInt(0, 256);
    b = getRandomInt(0, 256);
    c = getRandomInt(0, 256);
    button.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}