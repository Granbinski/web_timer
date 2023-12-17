import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
}

export function toggleReset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function toggleSet() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}
export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
}

export function setMinutes() {}
