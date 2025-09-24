document.addEventListener('DOMContentLoaded', () => {
  const scrollCountInput = document.getElementById('scroll-count');
  const websitesTextarea = document.getElementById('websites');
  const fadeSpeedInput = document.getElementById('fade-speed');
  const reverseFadingCheckbox = document.getElementById('reverse-fading');
  const saveButton = document.getElementById('save-button');
  const statusDiv = document.getElementById('status');

  // Load saved settings
  chrome.storage.sync.get(['scrollCount', 'websites', 'fadeSpeed', 'reverseFading'], (result) => {
    if (result.scrollCount) {
      scrollCountInput.value = result.scrollCount;
    }
    if (result.websites) {
      websitesTextarea.value = result.websites.join('\n');
    }
    if (result.fadeSpeed) {
      fadeSpeedInput.value = result.fadeSpeed;
    }
    if (result.reverseFading) {
      reverseFadingCheckbox.checked = result.reverseFading;
    }
  });

  // Save settings
  saveButton.addEventListener('click', () => {
    const scrollCount = scrollCountInput.value;
    const websites = websitesTextarea.value.split('\n').filter(Boolean); // Filter out empty lines
    const fadeSpeed = fadeSpeedInput.value;
    const reverseFading = reverseFadingCheckbox.checked;

    chrome.storage.sync.set({ scrollCount, websites, fadeSpeed, reverseFading }, () => {
      statusDiv.textContent = 'Options saved.';
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 2000);
    });
  });
});