// Time in task bar
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById('time').textContent = timeString;
}

// Update time every minute
setInterval(updateTime, 60000);
updateTime();

// Open app
function openApp(type) {
  alert(`Open ${type} section... (you’ll replace this with real navigation)`);
}

// Initialize the top z-index value
let topZIndex = 1001;

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


