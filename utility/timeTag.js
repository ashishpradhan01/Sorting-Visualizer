const totalTimeTag = document.querySelector(".total-time");
export function setTotalTimeTag(timeInMilliseconds) {
  totalTimeTag.textContent = `Total time: ${timeInMilliseconds}ms`;
}

export function clearTotalTimeTag() {
  totalTimeTag.textContent = "";
}
