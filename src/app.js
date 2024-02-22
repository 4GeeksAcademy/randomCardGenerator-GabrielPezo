/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(randomPinta());
  document.querySelector(".card").innerHTML = randomNumber();
};

function randomNumber() {
  let numberArr = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomizer = Math.floor(Math.random() * 13);
  return numberArr[randomizer];
}
function randomPinta() {
  let pintaArr = ["diamond", "spade", "heart", "club"];
  let randomizer2 = Math.floor(Math.random() * 4);
  return pintaArr[randomizer2];
}
