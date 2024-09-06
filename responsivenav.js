function toggleMenu() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("show");
    hamburger.classList.toggle("open");
  }