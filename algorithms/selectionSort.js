import { Colors, VISUALIZER } from "../utility/constants.js";
import sleep from "../utility/sleep.js";
import swapBars from "../utility/swapBars.js";
import { setTotalTimeTag } from "../utility/timeTag.js";

// Selection Sort
export default async function selectionSort(numbers) {
  //TODO: Fix selection sort color (for better visualization)
  const startTime = Date.now();
  let min_index;
  let childern = document.querySelector(VISUALIZER).childNodes;
  for (let i = 0; i < numbers.length; i++) {
    min_index = i;
    childern[min_index].style.background = Colors.POINTER;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[min_index] > numbers[j]) {
        childern[j].style.background = Colors.POINTER;
        min_index = j;
        childern[j].style.background = Colors.ORIGINAL;
      }
    }
    childern[min_index].style.background = Colors.ORIGINAL;
    if (min_index != i) {
      await sleep(200);
      let temp = numbers[min_index];
      numbers[min_index] = numbers[i];
      numbers[i] = temp;
      swapBars(childern[min_index], childern[i]);
      childern[min_index].style.background = Colors.ORIGINAL;
    }
    childern[i].style.background = Colors.SORTED;
  }
  const endTime = Date.now();
  setTotalTimeTag(endTime - startTime - 200);
}
