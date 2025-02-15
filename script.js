document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      event.preventDefault()
      navItems.forEach((navItem) => navItem.classList.remove("active"))
      this.classList.add("active")
      
      //  setTimeout(() => {
      //    window.location.href = this.querySelector("a").href;
      //  }, 100);

    });
  });
});
