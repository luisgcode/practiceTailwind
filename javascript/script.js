"use strict";
const htmlElement = document.querySelector("html");
const toggleButton = document.querySelector("#toggle");
const toggleButtonMobile = document.querySelector("#toggle-mb");

toggleButton.addEventListener("click", function () {
  htmlElement.classList.toggle("dark");
});

toggleButtonMobile.addEventListener("click", function () {
  htmlElement.classList.toggle("dark");
});
