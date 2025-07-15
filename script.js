function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  document.getElementById("time").textContent =
    `${h}:${m.toString().padStart(2, "0")} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();
