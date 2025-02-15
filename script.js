document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((navItem) => navItem.classList.remove("active"));

      this.classList.add("active");

      // Store the URL to navigate to
      const targetURL = this.querySelector("a").href;

      setTimeout(() => {
        window.location.href = targetURL;
      }, 100);
    });
  });

  // Set active state based on current URL
  const currentURL = window.location.href;
  navItems.forEach((item) => {
    const link = item.querySelector("a").href;
    if (currentURL === link) {
      item.classList.add("active");
    }
  });
});
