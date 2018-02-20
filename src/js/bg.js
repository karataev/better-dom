
let enabled = false;

chrome.browserAction.onClicked.addListener(() => {
  enabled = !enabled;

  setIcon(enabled);

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {enabled: enabled});
  });
});

function setIcon(isEnabled) {
  const path = isEnabled ? 'img/active.png' : 'img/inactive.png';

  chrome.browserAction.setIcon({
    path,
  });
}

