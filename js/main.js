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


/* =====================================================
   TAMBAHAN
   ANIMATED BUBBLE BACKGROUND
   ===================================================== */

const animatedBackground = document.querySelector(".animated-background");
const bubbles = document.querySelectorAll(".bubble");

const bubbleData = [];


/*
* Membuat posisi dan arah awal
*/

bubbles.forEach((bubble) => {

    const size = bubble.offsetWidth;

    const maxX = animatedBackground.clientWidth - size;
    const maxY = animatedBackground.clientHeight - size;

    bubbleData.push({

        element: bubble,

        x: Math.random() * Math.max(maxX, 0),

        y: Math.random() * Math.max(maxY, 0),

        dx: (Math.random() * 2 - 1) * 1.2,

        dy: (Math.random() * 2 - 1) * 1.2,

        size: size

    });

});


/*
* Animasi bubble
*/

function animateBubbles() {

    const width = animatedBackground.clientWidth;
    const height = animatedBackground.clientHeight;


    bubbleData.forEach((bubble) => {

        const maxX = width - bubble.size;
        const maxY = height - bubble.size;


        /*
        * Gerakkan bubble
        */

        bubble.x += bubble.dx;

        bubble.y += bubble.dy;


        /*
        * Jika menyentuh EDGE KIRI
        */

        if (bubble.x <= 0) {

            bubble.x = 0;

            bubble.dx = Math.abs(bubble.dx);

        }


        /*
        * Jika menyentuh EDGE KANAN
        */

        if (bubble.x >= maxX) {

            bubble.x = maxX;

            bubble.dx = -Math.abs(bubble.dx);

        }


        /*
        * Jika menyentuh EDGE ATAS
        */

        if (bubble.y <= 0) {

            bubble.y = 0;

            bubble.dy = Math.abs(bubble.dy);

        }


        /*
        * Jika menyentuh EDGE BAWAH
        */

        if (bubble.y >= maxY) {

            bubble.y = maxY;

            bubble.dy = -Math.abs(bubble.dy);

        }


        /*
        * Terapkan posisi
        */

        bubble.element.style.transform =
            `translate(${bubble.x}px, ${bubble.y}px)`;

    });


    requestAnimationFrame(animateBubbles);

}


/*
* Jalankan animasi
*/

animateBubbles();


/*
* Jika ukuran browser berubah,
* pastikan bubble tetap berada di area background.
*/

window.addEventListener("resize", function () {

    const width = animatedBackground.clientWidth;
    const height = animatedBackground.clientHeight;


    bubbleData.forEach((bubble) => {

        const maxX = Math.max(width - bubble.size, 0);
        const maxY = Math.max(height - bubble.size, 0);


        if (bubble.x > maxX) {
            bubble.x = maxX;
        }

        if (bubble.y > maxY) {
            bubble.y = maxY;
        }

    });

});
