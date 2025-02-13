const img1 = document.querySelector("#img1");

const img2 = document.querySelector("#img2");

const btns = document.querySelector(".btns-acciones");

const producto1 = document.querySelector(".producto1");

const producto2 = document.querySelector(".producto2");


const galeria1 = [
  "./imgs/pc1.png",
  "./imgs/1.1.png",
  "./imgs/1.2.png",
  "./imgs/1.3.png",
  "./imgs/1.4.png",
];
const galeria2 = [
  "./imgs/pc2.png",
  "./imgs/2.1.png",
  "./imgs/2.2.png",
  "./imgs/2.3.png",
  "./imgs/2.4.png",
];

function cargarImagen(img, galeria) {
  img.src = galeria[0];
}

cargarImagen(img1, galeria1);
cargarImagen(img2, galeria2);

function visorimagen(img1, img2, galeria) {
  img2.style.setProperty("opacity", "0");
  producto1.style.setProperty("opacity", "0");
  producto2.style.setProperty("opacity", "0");
  img1.style.setProperty("width", "40em");
  img1.style.setProperty("display", "block");
  img1.style.setProperty("position", "absolute");
  img1.style.setProperty("top", "50%");
  img1.style.setProperty("left", "50%");
  img1.style.setProperty("transform", "translate(-50%, -50%)");
  img1.style.setProperty("z-index", "1");
  btns.style.setProperty("display", "block");
  controlGaleria(img1, galeria);
}

img1.onclick = () => visorimagen(img1, img2, galeria1);
img2.onclick = () => visorimagen(img2, img1, galeria2);

const btn_cerrar = document.querySelector(".btn-cerrar");
btn_cerrar.onclick = () => {
  location.reload();
};

const btn_next = document.querySelector(".btn-next");
const btn_prev = document.querySelector(".btn-prev");

function controlGaleria(img, galeria) {
  let i = 0;
  btn_next.onclick = () => {
    i = (i + 1) % galeria.length;
    img.src = galeria[i];
  };

  btn_prev.onclick = () => {
    i = (i - 1 + galeria.length) % galeria.length;
    img.src = galeria[i];
  };
}
