let scrollCount = 0;
let scrollTimeout;
let lastScrollTop = 0;

chrome.storage.sync.get(['scrollCount', 'websites', 'fadeSpeed', 'reverseFading'], (result) => {
  const currentHostname = window.location.hostname;
  const targetWebsites = result.websites || [];
  const scrollThreshold = parseInt(result.scrollCount, 10) || 10;
  const fadeSpeed = parseFloat(result.fadeSpeed) || 0.1;
  const reverseFading = result.reverseFading || false;

  if (targetWebsites.some(website => currentHostname.includes(website))) {
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          scrollCount++;
        } else if (scrollTop < lastScrollTop) {
          if (reverseFading) {
            scrollCount = Math.max(0, scrollCount - 1);
          }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        if (scrollCount >= scrollThreshold) {
          const opacity = Math.max(0, 1 - (scrollCount - scrollThreshold) * fadeSpeed);
          document.body.style.opacity = opacity;
        } else {
          document.body.style.opacity = 1;
        }
      }, 100); // Debounce scroll event
    });
  }
});