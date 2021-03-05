let a, b, c;
let button = document.getElementById("color");
let font = document.getElementById("font");

button.addEventListener("click", changeColor);
font.addEventListener("click", changeFontColor);

function changeColor() {

    a = getRandomInt(100, 256);
    b = getRandomInt(100, 256);
    c = getRandomInt(100, 256);
    font.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function changeFontColor() {

    a = getRandomInt(100, 256);
    b = getRandomInt(100, 256);
    c = getRandomInt(100, 256);
    button.style.color = `rgb(${a}, ${b}, ${c})`;
}