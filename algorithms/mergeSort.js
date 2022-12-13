import sleep from "../utility/sleep.js";
import { Colors, DELAY, VISUALIZER } from "../utility/constants.js";
import drawBars from "../utility/drawBars.js";

let temp = [];
async function merge(numbers, start, mid, end) {
  let childern = document.querySelector(VISUALIZER).childNodes;

  let i = start,
    j = mid + 1,
    k = start,
    endOfSubArrLeft = mid,
    endOfSubArrRight = end;
  while (i <= endOfSubArrLeft && j <= endOfSubArrRight) {
    if (numbers[i] < numbers[j]) {
      temp[k] = numbers[i++];
    } else {
      temp[k] = numbers[j++];
    }
    k++;
  }
  // copying the remaining elements either from left or right array
  while (i <= endOfSubArrLeft) temp[k++] = numbers[i++];
  while (j <= endOfSubArrRight) temp[k++] = numbers[j++];

  k = start;
  while (k <= end) {
    childern[k].style.background = Colors.POINTER;
    numbers[k] = temp[k];
    k++;
    await sleep(DELAY);
    drawBars(numbers);
  }
}

async function mergeSort(numbers, start, end) {
  if (start < end) {
    let mid = parseInt(start + (end - start) / 2);
    await mergeSort(numbers, start, mid);
    await mergeSort(numbers, mid + 1, end);
    await merge(numbers, start, mid, end);
  }
}

export default async function mergeSortWrapper(numbers, start, end) {
  await mergeSort(numbers, start, end);
  let childern = document.querySelector(VISUALIZER).childNodes;
  childern.forEach((div) => (div.style.background = Colors.SORTED));
}


