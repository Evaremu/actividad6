const img11 = document.querySelector('#img11');
const img21 = document.querySelector('#img21');
const bot = document.querySelector('.bot');


const fotos1 = [
    "./fotos/monfrague/monfrague1.jpg",
    "./fotos/monfrague/monfrague2.jpg",
    "./fotos/monfrague/monfrague3.jpg",
    "./fotos/monfrague/monfrague4.jpg",
    "./fotos/monfrague/monfrague5.jpg",
];

const fotos2 = [
    "./fotos/cabanas/cabana1.jpg",
    "./fotos/cabanas/cabana2.png",
    "./fotos/cabanas/cabana3.jpg",
    "./fotos/cabanas/cabana4.jpg",
    "./fotos/cabanas/cabana5.png",
];

function cargarImagen(img, fotos) {
    img.src = fotos[0];
}

cargarImagen(img11, fotos1);
cargarImagen(img21, fotos2);

function visorImagen(img11, img21, fotos) {
    img21.style.setProperty("opacity", "0");
    img11.classList.add("active");
    bot.style.setProperty("display", "block");
    controlGaleria(img11, fotos);
}

img11.onclick = () => visorImagen(img11, img21, fotos1);
img21.onclick = () => visorImagen(img21, img11, fotos2);

const btn_next = document.querySelector(".bot_next");
const btn_prev = document.querySelector(".bot_prev");
const btn_close = document.querySelector(".bot_close");

function controlGaleria(img, fotos) {
    let i = 0;
    btn_next.onclick = () => {
        i = (i + 1) % fotos.length;
        img.src = fotos[i];
    };

    btn_prev.onclick = () => {
        i = (i - 1 + fotos.length) % fotos.length;
        img.src = fotos[i];
    }
}

btn_close.onclick = () => {
    location.reload();
}

