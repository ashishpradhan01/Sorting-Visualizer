import { Colors, DELAY, VISUALIZER } from "../utility/constants.js";
import drawBars from "../utility/drawBars.js";
import sleep from "../utility/sleep.js";

async function partition(numbers, start, end) {
  let childern = document.querySelector(VISUALIZER).childNodes;
  let pivot = numbers[end];
  let i = start - 1;
  for (let j = start; j <= end - 1; j++) {
    if (numbers[j] < pivot) {
      childern[j].style.background = Colors.POINTER;
      i++;
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
      await sleep(DELAY);
      drawBars(numbers);
      childern[j].style.background = Colors.ORIGINAL;
    }
  }
  let temp = numbers[i + 1];
  numbers[i + 1] = numbers[end];
  numbers[end] = temp;
  return i + 1;
}

async function quickSort(numbers, start, end) {
  if (start < end) {
    let pivot = await partition(numbers, start, end);
    await quickSort(numbers, start, pivot - 1);
    await quickSort(numbers, pivot + 1, end);
  }
}

export default async function quickSortWrapper(numbers, start, end) {
  await quickSort(numbers, start, end);
  let childern = document.querySelector(VISUALIZER).childNodes;
  childern.forEach((div) => (div.style.background = Colors.SORTED));
}
