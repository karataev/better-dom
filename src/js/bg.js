
let enabled = false;

function updateEnabled(value) {
  enabled = value;
  setIcon(enabled);

  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {enabled});
  });
}

chrome.browserAction.onClicked.addListener(() => {
  updateEnabled(!enabled);
});

chrome.runtime.onMessage.addListener(data => {
  if (data.type === 'TOGGLE_ENABLED') {
    updateEnabled(!enabled);
  }
});

function setIcon(isEnabled) {
  const path = isEnabled ? 'img/active.png' : 'img/inactive.png';

  chrome.browserAction.setIcon({
    path,
  });
}

