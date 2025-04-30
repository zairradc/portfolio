function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

function openApp(type) {
  alert(`Open ${type} section... (you’ll replace this with real navigation)`);
}


