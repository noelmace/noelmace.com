(() => {
  const darkModeToggle = document.querySelector('dark-mode-toggle');
  // const manifests = document.querySelectorAll('link[rel="manifest"]');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const linkCards = document.querySelectorAll('link-card[src][data-src-light][data-src-dark]');

  const toggleTheme = (e) => {
    const darkModeOn = e.detail.colorScheme === 'dark' ? true : false;
    // manifests.forEach((link) => {
    //   link.href = darkModeOn ? link.dataset.hrefDark : link.dataset.hrefLight;
    // });
    linkCards.forEach((link) => {
      link.src = darkModeOn ? link.dataset.srcDark : link.dataset.srcLight;
    });
    themeColor.content = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
  };
  document.addEventListener('colorschemechange', toggleTheme);
  toggleTheme({detail: {colorScheme: darkModeToggle.mode}});
})();
