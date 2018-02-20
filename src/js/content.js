
let activeEl;

function onMouseMove(e) {
  // console.log('move!', e.x, e.y);
  let el = document.elementFromPoint(e.x, e.y);
  if (el) {
    if (activeEl) activeEl.style.outline = 'none';
    activeEl = el;
    activeEl.style.outline = '1px solid red';
  }
}

function onMouseDown(e) {
  e.target.remove();
}

function activate() {
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
}

function deactivate() {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mousedown', onMouseDown);
}

chrome.runtime.onMessage.addListener(data => {
  const isEnabled = data.enabled;

  isEnabled ? activate() : deactivate();
});


