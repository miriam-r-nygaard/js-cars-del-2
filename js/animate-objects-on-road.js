"use strict";
//opbygger vores js struktur med Array som indeholder js objekter
//her laver vi et Array
const carInfo = [
  {
    className: "car1",
    carBrand: "Ford",
    carModel: "Mustang",
    releaseYear: 1974,
    color: "red",
    fuelType: "Diesel",
  },
  {
    className: "car2",
    carBrand: "Volvo",
    carModel: "242 Series",
    releaseYear: 1982,
    color: "white",
    fuelType: "Benzin",
  },
  {
    className: "car3",
    carBrand: "Volkswagen",
    carModel: "Passat",
    releaseYear: 1979,
    color: "blue",
    fuelType: "Diesel",
  },
];

//venter med at kører JS indtil HTML er loadet helt
document.addEventListener("DOMContentLoaded", () => {
  //finder tooltip id og gemmer det i en variabel
  const tooltip = document.getElementById("tooltip");
  //funktion der viser tooltip med biloplysninger
  //parametere html = den tekst indeholdende html-tags som vi vil vise i tooltip'en
  function showTooltip(html) {
    //Indsætter teksten i tooltip'en
    if (tooltip) {
      tooltip.innerHTML = html;
      //gør tooltip'en synlig med css klassen
      tooltip.classList.add("is-visible");
      setTimeout(function () {
        tooltip.classList.remove("is-visible");
      }, 8000);
    }
  }

  //slå dette op i chat, forstod det virkelig ikke
  //du mangler dollarstegn
  carInfo.forEach((car) => {
    document.querySelectorAll("." + car.className).forEach((elem) => {
      elem.addEventListener("mouseover", () => {
        const carDetails = `
        <strong>${car.carBrand} ${car.carModel}</strong><br>
        Release Year: ${car.releaseYear}<br>
        Color: ${car.color}<br>
        Fuel: ${car.fuelType}
        `;
        showTooltip(carDetails);
      });
    });
  });

  //Hent DOM elementer
  //Her er 6 dom elementer

  //henter bilerne
  const getRedCar = document.getElementById("redCar");
  const getPoliceCar = document.getElementById("policeCar");
  const getBlueCar = document.getElementById("blueCar");
  //henter egne biler
  const getBusCar = document.getElementById("busCar");
  const getTruckCar = document.getElementById("truckCar");

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

  //egne lyd objekter
  const soundBusCar = new Audio();
  soundBusCar.src = "../sound/bus-sound.wav";

  const soundTruckCar = new Audio();
  soundTruckCar.src = "../sound/truck-sound.wav";

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

  //egne biler
  //bus
  if (getBusCar) {
    getBusCar.addEventListener("click", () => {
      soundBusCar.play();
    });
  }
  //truck
  if (getTruckCar) {
    getTruckCar.addEventListener("click", () => {
      soundTruckCar.play();
    });
  }

  //sun og scene
  // husk to &&
  //classList.toggler skifter imellem classen .sun og night, som kommer fra CSS og tilføjer den i HTML
  if (sun && scene) {
    sun.addEventListener("click", () => {
      scene.classList.toggle("night");
    });
  }
});
