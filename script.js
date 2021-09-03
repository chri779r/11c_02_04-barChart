"use strict";

window.addEventListener("DOMContentLoaded", init);

const model = [1, 9, 2, 8, 3, 7, 4, 6, 5, 10, 19, 11, 18, 12, 17, 13, 16, 14, 15, 20, 29, 21, 28, 22, 27, 23, 26, 24, 25, 30, 39, 31, 38, 32, 37, 33, 36, 34, 35, 40];

function init() {
  console.log("Black friday");

  loop();
}

function loop() {
  console.log("loop");
  displayData();
  modifyModel();
  setTimeout(loop, 500);
}

function getNumberOfCustomers() {
  console.log("Number of customers");

  return Math.floor(Math.random() * 32);
}

function displayData() {
  console.log("Show this in the HTML");

  document.querySelector("#bars").innerHTML = "";

  for (let i = 0; i <= 39; i++) {
    console.log(i);
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = (model[i] / 32) * 100 + "%";
    document.querySelector("#bars").append(bar);
  }
}

function modifyModel() {
  console.log("Modify the shown data");

  const queueSize = getNumberOfCustomers();
  model.shift();
  model.push(queueSize);
}
