document.addEventListener('DOMContentLoaded', () => {
  const scrollCountInput = document.getElementById('scroll-count');
  const websitesTextarea = document.getElementById('websites');
  const saveButton = document.getElementById('save-button');
  const statusDiv = document.getElementById('status');

  // Load saved settings
  chrome.storage.sync.get(['scrollCount', 'websites'], (result) => {
    if (result.scrollCount) {
      scrollCountInput.value = result.scrollCount;
    }
    if (result.websites) {
      websitesTextarea.value = result.websites.join('\n');
    }
  });

  // Save settings
  saveButton.addEventListener('click', () => {
    const scrollCount = scrollCountInput.value;
    const websites = websitesTextarea.value.split('\n').filter(Boolean); // Filter out empty lines

    chrome.storage.sync.set({ scrollCount, websites }, () => {
      statusDiv.textContent = 'Options saved.';
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 2000);
    });
  });
});