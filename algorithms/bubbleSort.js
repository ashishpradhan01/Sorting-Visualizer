import { Colors, DELAY, VISUALIZER } from "../utility/constants.js";
import sleep from "../utility/sleep.js";
import swapBars from "../utility/swapBars.js";
import { setTotalTimeTag } from "../utility/timeTag.js";

// Bubble Sort
export default async function bubbleSort(numbers) {
  const startTime = Date.now();
  let i = numbers.length;
  let childern = document.querySelector(VISUALIZER).childNodes;
  while (i > 0) {
    for (let j = 0; j < i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        childern[j].style.background = Colors.POINTER;
        childern[j + 1].style.background = Colors.POINTER;
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
        await sleep(DELAY);
        swapBars(childern[j], childern[j + 1]);
        childern[j].style.background = Colors.ORIGINAL;
        childern[j + 1].style.background = Colors.ORIGINAL;
      }
    }
    childern[i - 1].style.background = Colors.SORTED;
    i--;
  }
  const endTime = Date.now();
  setTotalTimeTag(endTime - startTime - DELAY);
}
