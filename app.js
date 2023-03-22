let userInputEL = document.querySelector("input");
let currentCountEl = document.querySelector("span span");
let currentCount = 60;
function updateCurrentCount(event) {
  let inputValueLength = event.target.value.length;
  updatedCount = currentCount - inputValueLength;
  currentCountEl.textContent = updatedCount;

  if (updatedCount <= 10) {
    userInputEL.classList.add("input-warning");
    currentCountEl.classList.add("count-warning");
  } else {
    userInputEL.classList.remove("input-warning");
    currentCountEl.classList.remove("count-warning");
  }
}
userInputEL.addEventListener("input", updateCurrentCount);
