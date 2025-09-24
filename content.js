let scrollCount = 0;
let scrollTimeout;
let lastScrollTop = 0;
let currentHref = document.location.href;

chrome.storage.sync.get(['scrollCount', 'websites', 'fadeSpeed', 'reverseFading'], (result) => {
  const currentHostname = window.location.hostname;
  const targetWebsites = result.websites || [];
  const scrollThreshold = parseInt(result.scrollCount, 10) || 10;
  const fadeSpeed = parseFloat(result.fadeSpeed) || 0.1;
  const reverseFading = result.reverseFading || false;

  if (targetWebsites.some(website => currentHostname.includes(website))) {
    // Reset function
    const resetFading = () => {
      scrollCount = 0;
      lastScrollTop = 0;
      document.body.style.opacity = 1;
    };

    // Listen for URL changes (for SPAs)
    new MutationObserver(() => {
      if (document.location.href !== currentHref) {
        currentHref = document.location.href;
        resetFading();
      }
    }).observe(document.body, { childList: true, subtree: true });


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