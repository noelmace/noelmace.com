(() => {
  const darkModeToggle = document.querySelector('dark-mode-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const msTitleColor = document.querySelector('msapplication-TileColor');

  const toggleTheme = (e) => {
    const darkModeOn = e.detail.colorScheme === 'dark' ? true : false;
    const primaryColor = darkModeOn ? 'hsl(0,0%,20%)' : '#24292e';
    themeColor.content = primaryColor;
    msTitleColor.content = primaryColor;
  };
  document.addEventListener('colorschemechange', toggleTheme);
  toggleTheme({detail: {colorScheme: darkModeToggle.mode}});
})();
