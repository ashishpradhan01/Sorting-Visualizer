const numbers = [];
const DESKTOP_LIMIT = 280;
const MOBILE_LIMIT = 88;
const DELAY = 20;
const message = document.querySelector(".message");
const sizeInput = document.querySelector(".size-input");
const newArrayBtn = document.querySelector(".new-array-button");
const bubbleSortBtn = document.querySelector(".bubble-sort-button");
const selectionSortBtn = document.querySelector(".selection-sort-button");
const insertionSortBtn = document.querySelector(".insertion-sort-button");

let size = Number.parseInt(sizeInput.value);
while (size--) numbers.push(Math.floor(Math.random() * 101) + 300);

newArrayBtn.addEventListener("click", (_) => {
  message.innerText = "";
  let size = Number.parseInt(sizeInput.value);
  //TODO: HANDLE SIZE == 1 CASE
  if (size <= DESKTOP_LIMIT) {
    numbers.length = 0;
    while (size--) numbers.push(Math.floor(Math.random() * 101) + 300);
    generateBars();
  } else {
    document.querySelector(".bars-container").innerHTML =
      "<p>Input Limit Exceeded (Max-Limit: 348);</p>";
  }
});

bubbleSortBtn.addEventListener("click", (_) => bubbleSort(numbers));
selectionSortBtn.addEventListener("click", (_) => selectionSort(numbers));
insertionSortBtn.addEventListener("click", (_) => insertionSort(numbers));
generateBars();
function generateBars() {
  document.querySelector(".bars-container").innerHTML = "";
  for (const height of numbers) {
    const bar = document.createElement("div");
    bar.style.height = `${height}px`;
    bar.classList.add("bar");
    // console.log(bar.style.height);
    document.querySelector(".bars-container").appendChild(bar);
  }
}

function swapBars(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);
  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");
  el1.style.height = transform2;
  el2.style.height = transform1;
}

function setMessageIfSortingDone(isSortingDone) {
  if (isSortingDone) {
    message.style.color = "lightgreen";
    message.innerText = "!!!Done!!!";
  } else {
    message.style.color = "#183b56";
    message.innerText = "!!!Running!!!";
  }
}

// Bubble Sort
async function bubbleSort(numbers) {
  let i = numbers.length;
  let childern = document.querySelector(".bars-container").childNodes;
  // console.log(childern[0].style);
  setMessageIfSortingDone(false);
  while (i > 0) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        childern[j].style.background = "red";
        childern[j + 1].style.background = "red";
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, DELAY)
        );
        swapBars(childern[j], childern[j + 1]);
        childern[j].style.background = "#2294ed";
        childern[j + 1].style.background = "#2294ed";
      }
    }
    childern[i - 1].style.background = "lightgreen";
    i--;
  }
  setMessageIfSortingDone(true);
}

// Selection Sort
async function selectionSort(numbers) {
  let min_index;
  let childern = document.querySelector(".bars-container").childNodes;
  setMessageIfSortingDone(false);
  for (let i = 0; i < numbers.length; i++) {
    min_index = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[min_index] > numbers[j]) {
        childern[min_index].style.background = "red";
        childern[j].style.background = "red";
        min_index = j;
        childern[min_index].style.background = "#2294ed";
        childern[j].style.background = "#2294ed";
      }
    }
    if (min_index != i) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );
      let temp = numbers[min_index];
      numbers[min_index] = numbers[i];
      numbers[i] = temp;
      swapBars(childern[min_index], childern[i]);
      childern[min_index].style.background = "#2294ed";
    }
    childern[i].style.background = "lightgreen";
  }
  setMessageIfSortingDone(true);
}

async function insertionSort(numbers) {
  let key;
  let childern = document.querySelector(".bars-container").childNodes;
  setMessageIfSortingDone(false);
  childern[0].style.background = "lightgreen";
  for (let i = 1; i < numbers.length; i++) {
    // childern[i].style.background = "lightgreen";
    key = numbers[i];
    let j = i - 1;
    childern[i].style.background = "red";
    // let currColorbar1 = childern[i].style.background;
    // let currColorbar2 = childern[j].style.background;
    while (j >= 0 && numbers[j] > key) {
      // childern[i].style.background = "red";
      // childern[j].style.background = "red";
      numbers[j + 1] = numbers[j];
      // childern[j + 1].style.background = currColorbar2;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, DELAY)
      );
      swapBars(childern[j + 1], childern[j]);
      j--;
      
    }
    numbers[j + 1] = key;
    childern[i].style.background = "lightgreen";
  }

  setMessageIfSortingDone(true);
}
