"use strict";

window.addEventListener("DOMContentloaded", init);

const model = [1, 9, 2, 8, 3, 7, 4, 6, 5, 10, 19, 11, 18, 12, 17, 13, 16, 14, 15, 20, 29, 21, 28, 22, 27, 23, 26, 24, 25, 30, 39, 31, 38, 32, 37, 33, 36, 34, 35, 40];

function init() {
  console.log("Black friday");
  loop();
}

function loop() {
  console.log("loop");
  displayData();
  modifyModel();
  setTimeout(loop, 1500);
}

function getNumber() {
  console.log("Number of customers");
}

function displayData() {
  console.log("Show this in the HTML");
}

function modifyModel() {
  console.log("Modify the shown data");
}
