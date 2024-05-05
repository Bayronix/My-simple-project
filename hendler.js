import { refs } from "./refs.js";

let count = 0;

export function onButtonIncrementClick(event) {
  setInterval(() => {
    count++;
    refs.buttonIncrement.textContent = count;
  }, 1000);
}

export function onButtonDecrementClick(event) {
  setInterval(() => {
    count--;
    refs.buttonDecrement.textContent = count;
  }, 1000);
}
