"use strict";

//Hent DOM elementer
//Her er 6 dom elementer

//henter bilerne
const getRedCar = document.getElementById("redCar");
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");

//hent sol og scene
const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

//opretter lydobjekter
const soundRedCar = new Audio();
soundRedCar.src = "../sound/red-car-horn.wav";
const soundPoliceCar = new Audio();
soundPoliceCar.src = "../sound/police-car-sound.wav";
const soundBlueCar = new Audio();
soundBlueCar.src = "../sound/blue-car-sound.wav";

//Sæt lyttere på, nu afspilles den med click
//rød bil
if (getRedCar) {
  getRedCar.addEventListener("click", () => {
    soundRedCar.play();
  });
}

//politi bil
if (getPoliceCar) {
  getPoliceCar.addEventListener("click", () => {
    soundPoliceCar.play();
  });
}

//blå bil
if (getBlueCar) {
  getBlueCar.addEventListener("click", () => {
    soundBlueCar.play();
  });
}
