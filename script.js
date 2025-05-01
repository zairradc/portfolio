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

// Ensure Windows Remain Accessible on Window Resize
window.addEventListener('resize', () => {
  document.querySelectorAll('.window').forEach((el) => {
    const rect = el.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newLeft = rect.left;
    let newTop = rect.top;

    if (rect.right > viewportWidth) {
      newLeft = Math.max(0, viewportWidth - el.offsetWidth);
    }

    if (rect.bottom > viewportHeight) {
      newTop = Math.max(0, viewportHeight - el.offsetHeight);
    }

    el.style.left = `${newLeft}px`;
    el.style.top = `${newTop}px`;
  });
});

// Prevent Windows from Being Dragged Outside the Viewport
function makeDraggable(el) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const titleBar = el.querySelector('.title-bar');

  if (titleBar) {
    titleBar.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
      document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Get window dimensions
        const elWidth = el.offsetWidth;
        const elHeight = el.offsetHeight;

        // Constrain within viewport
        newLeft = Math.max(0, Math.min(newLeft, viewportWidth - elWidth));
        newTop = Math.max(0, Math.min(newTop, viewportHeight - elHeight));

        el.style.left = `${newLeft}px`;
        el.style.top = `${newTop}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      document.body.style.userSelect = 'auto';
    });
  }
}


