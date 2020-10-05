const btn = document.querySelector("button");

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G"];

function changeBg() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * array.length);
    hex += array[random];
  }

  document.body.style.backgroundColor = hex;
}

btn.addEventListener("click", changeBg);
