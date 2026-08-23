const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener("click", function () {

    menu.classList.toggle("tampil");

    if (menu.classList.contains("tampil")) {
        iconBars.style.display = "none";
        iconClose.style.display = "block";
    } else {
        iconBars.style.display = "block";
        iconClose.style.display = "none";
    }

});