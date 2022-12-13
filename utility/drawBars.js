import { VISUALIZER } from "./constants.js";

export default function drawBars(nums) {
  document.querySelector(VISUALIZER).innerHTML = "";

  for (const height of nums) {
    const bar = document.createElement("div");
    bar.style.height = `${height}px`;
    bar.classList.add("bar");
    document.querySelector(VISUALIZER).appendChild(bar);
  }
}
