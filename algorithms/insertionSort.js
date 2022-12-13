import { Colors, DELAY, VISUALIZER } from "../utility/constants.js";
import sleep from "../utility/sleep.js";
import swapBars from "../utility/swapBars.js";
import { setTotalTimeTag } from "../utility/timeTag.js";

export default async function insertionSort(numbers) {
  const startTime = Date.now();
  let key;
  let childern = document.querySelector(VISUALIZER).childNodes;
  childern[0].style.background = Colors.SORTED;
  for (let i = 1; i < numbers.length; i++) {
    key = numbers[i];
    let j = i - 1;
    childern[i].style.background = Colors.POINTER;
    while (j >= 0 && numbers[j] > key) {
      numbers[j + 1] = numbers[j];
      await sleep(DELAY);
      swapBars(childern[j + 1], childern[j]);
      j--;
    }
    numbers[j + 1] = key;
    childern[i].style.background = Colors.SORTED;
  }
  const endTime = Date.now();
  setTotalTimeTag(endTime - startTime - DELAY);
}
