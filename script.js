function updateTime() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

function openApp(type) {
  alert(`Open ${type} section... (you’ll replace this with real navigation)`);
}

// Initialize the top z-index value
let topZIndex = 100;

// Function to bring a window to the front
function bringToFront(windowEl) {
  topZIndex += 1;
  windowEl.style.zIndex = topZIndex;
}

// Attach event listeners to all title bars
document.querySelectorAll('.title-bar').forEach(titleBar => {
  titleBar.addEventListener('mousedown', () => {
    const windowEl = titleBar.closest('.window');
    bringToFront(windowEl);
  });
});


