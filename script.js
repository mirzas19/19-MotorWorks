/*
  SET YOUR LAUNCH DATE HERE.

  Example:
  const launchDate = new Date("2026-10-01T10:00:00+05:30");

  The countdown uses the visitor's browser time.
*/
const launchDate = new Date("2026-10-01T10:00:00+05:30");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function pad(number) {
  return String(number).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const difference = launchDate.getTime() - now.getTime();

  if (difference <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

document.getElementById("year").textContent = new Date().getFullYear();

updateCountdown();
setInterval(updateCountdown, 1000);
