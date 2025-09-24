let scrollCount = 0;
let scrollTimeout;

chrome.storage.sync.get(['scrollCount', 'websites'], (result) => {
  const currentHostname = window.location.hostname;
  const targetWebsites = result.websites || [];
  const scrollThreshold = result.scrollCount || 10;

  if (targetWebsites.some(website => currentHostname.includes(website))) {
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollCount++;
        if (scrollCount >= scrollThreshold) {
          const opacity = Math.max(0, 1 - (scrollCount - scrollThreshold) * 0.1);
          document.body.style.opacity = opacity;
        }
      }, 100); // Debounce scroll event
    });
  }
});