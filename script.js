// today's temperature red/hot and blue/cold
let todayRedNum = document.querySelector("#today-red-num");
let todayBlueNum = document.querySelector("#today-blue-num");
// tomorrow's temperature red/hot and blue/cold
let tomRedNum = document.querySelector("#tom-red-num");
let tomBlueNum = document.querySelector("#tom-blue-num");
// friday's temperature red/hot and blue/cold
let friRedNum = document.querySelector("#fri-red-num");
let friBlueNum = document.querySelector("#fri-blue-num");
// saturday's temperature red/hot and blue/cold
let satRedNum = document.querySelector("#sat-red-num");
let satBlueNum = document.querySelector("#sat-blue-num");
// cookie box
let cookieBox = document.querySelector("#cookies-box");

// EXTRACT FIRST Number Found from String
let str = "Sampll323435 Stringrfd23232ftesd3454!";
let numbers = str.match(/\d+/)[0];
// ====== Variables Definition  =====//

function removeCookie() {
  cookieBox.remove();
}

function changeCelciusToFahrenheit() {
  // (C x 9/5) + 32
  console.log("text number: ", typeof numbers);
  if (
    todayRedNum.innerText === "24°" &&
    todayBlueNum.innerText === "18°" &&
    tomRedNum.innerText === "27°" &&
    tomBlueNum.innerText === "19°" &&
    friRedNum.innerText === "21°" &&
    friBlueNum.innerText === "16°" &&
    satRedNum.innerText === "26°" &&
    satBlueNum.innerText === "21°"
  ) {
    todayRedNum.innerText =
      Math.round((todayRedNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
    todayBlueNum.innerText =
      Math.round((todayBlueNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
    tomRedNum.innerText =
      Math.round((tomRedNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
    tomBlueNum.innerText =
      Math.round((tomBlueNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
    friRedNum.innerText =
      Math.round((friRedNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
    friBlueNum.innerText =
      Math.round((friBlueNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
    satRedNum.innerText =
      Math.round((satRedNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
    satBlueNum.innerText =
      Math.round((satBlueNum.innerText.match(/\d+/)[0] * 9) / 5 + 32) + "°";
  }
}

function changeFahrenheitToCelcius() {
  // (F - 32) x 5/9
  if (
    todayBlueNum.innerText === "64°" &&
    todayRedNum.innerText === "75°" &&
    tomRedNum.innerText === "81°" &&
    tomBlueNum.innerText === "66°" &&
    friRedNum.innerText === "70°" &&
    friBlueNum.innerText === "61°" &&
    satRedNum.innerText === "79°" &&
    satBlueNum.innerText === "70°"
  ) {
    todayRedNum.innerText =
      Math.round(((todayRedNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
    todayBlueNum.innerText =
      Math.round(((todayBlueNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
    tomRedNum.innerText =
      Math.round(((tomRedNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
    tomBlueNum.innerText =
      Math.round(((tomBlueNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
    friRedNum.innerText =
      Math.round(((friRedNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
    friBlueNum.innerText =
      Math.round(((friBlueNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
    satRedNum.innerText =
      Math.round(((satRedNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
    satBlueNum.innerText =
      Math.round(((satBlueNum.innerText.match(/\d+/)[0] - 32) * 5) / 9) + "°";
  }
}

function changeTemp(element) {
  if (element.value == "°C") {
    console.log("Celcius");
    changeFahrenheitToCelcius();
  } else if (element.value == "°F") {
    console.log("Fahrenheit");
    changeCelciusToFahrenheit();
  }
}
