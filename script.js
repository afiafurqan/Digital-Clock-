const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dateEl = document.getElementById("date");
const formatBtn = document.getElementById("format");

let is24Hour = false;

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();

  if (is24Hour) {
    ampmEl.style.display = "none";
  } else {
    ampmEl.style.display = "inline";
    ampmEl.textContent = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(now.getMinutes());
  secondsEl.textContent = pad(now.getSeconds());

  dateEl.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

formatBtn.addEventListener("click", function () {
  is24Hour = !is24Hour;
  formatBtn.textContent = is24Hour ? "Switch to 12-hour" : "Switch to 24-hour";
  updateClock();
});

updateClock();
setInterval(updateClock, 1000);
