function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

function openApp(type) {
  alert(`Open ${type} section... (you’ll replace this with real navigation)`);
}

function openWindow(id) {
  const win = document.getElementById(id);
  win.style.display = 'block';
}

function closeWindow(id) {
  const win = document.getElementById(id);
  win.style.display = 'none';
}

