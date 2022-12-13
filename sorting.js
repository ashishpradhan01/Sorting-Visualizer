import bubbleSort from "./algorithms/bubbleSort.js";
import insertionSort from "./algorithms/insertionSort.js";
import mergeSortWrapper from "./algorithms/mergeSort.js";
import quickSortWrapper from "./algorithms/quickSort.js";
import selectionSort from "./algorithms/selectionSort.js";
import { DELAY, VISUALIZER } from "./utility/constants.js";
import { setTotalTimeTag, clearTotalTimeTag } from "./utility/timeTag.js";

const numbers = [];
const DESKTOP_LIMIT = 200;
const MOBILE_LIMIT = 88;
const sizeInput = document.querySelector(".size-input");
const newArrayBtn = document.querySelector(".new-array-button");
const bubbleSortBtn = document.querySelector(".bubble-sort-button");
const selectionSortBtn = document.querySelector(".selection-sort-button");
const insertionSortBtn = document.querySelector(".insertion-sort-button");
const mergeSortBtn = document.querySelector(".merge-sort-button");
const quickSortBtn = document.querySelector(".quick-sort-button");

let size = Number.parseInt(sizeInput.value);
while (size--) numbers.push(Math.floor(Math.random() * 101) * 3 + 10);
newArrayBtn.addEventListener("click", (_) => {
  let size = Number.parseInt(sizeInput.value);
  //TODO: HANDLE SIZE == 1 CASE
  if (2 <= size && size <= DESKTOP_LIMIT) {
    numbers.length = 0;
    while (size--) numbers.push(Math.floor(Math.random() * 101) * 3 + 10);
    clearTotalTimeTag();
    generateBars();
  }
});

bubbleSortBtn.addEventListener("click", (_) => bubbleSort(numbers));
selectionSortBtn.addEventListener("click", (_) => selectionSort(numbers));
insertionSortBtn.addEventListener("click", (_) => insertionSort(numbers));
mergeSortBtn.addEventListener("click", async (_) => {
  const startTime = Date.now();
  await mergeSortWrapper(numbers, 0, numbers.length - 1);
  const endTime = Date.now();
  setTotalTimeTag(endTime - startTime - DELAY);
});
quickSortBtn.addEventListener("click", async (_) => {
  const startTime = Date.now();
  await quickSortWrapper(numbers, 0, numbers.length - 1);
  const endTime = Date.now();
  setTotalTimeTag(endTime - startTime - DELAY);
});

generateBars();
function generateBars() {
  document.querySelector(VISUALIZER).innerHTML = "";
  for (const height of numbers) {
    const bar = document.createElement("div");
    bar.style.height = `${height}px`;
    bar.classList.add("bar");
    document.querySelector(VISUALIZER).appendChild(bar);
  }
}
