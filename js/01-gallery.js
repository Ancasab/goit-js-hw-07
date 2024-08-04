
import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
console.log(galleryItems);
console.log(galleryItems[0]);



// 1. Crearea și randarea unui marcaj pe baza datelor din matricea de date galleryItems și a șablonului de articol furnizat din galerie.


const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
  return items.map((item) => {
    const { preview, original, description } = item;
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}" 
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }).join("");
};

const renderGallery = () => {
  galleryContainer.innerHTML = createGalleryMarkup(galleryItems);
};

renderGallery();

// 2. Delegarea la ul.gallery și obținerea unui url a imaginii mari.
// 3. Conectarea scriptului și a stilurilor din librăria ferestrei modale basicLightbox. Folosiți CDN service jsdelivr și adăugați în proiect link-urile fișierelor minimizate (.min) de la librăria folosită.
// 4. Deschiderea unei ferestre modale printr-un click pe un element al galeriei. Pentru a face acest lucru, citiți documentația și exemple deja implementate.
// 5. Înlocuirea valorii atributului src al elementului <img> în fereastra modală înainte deschiderii. Utilizați marcajul deja existent pentru fereastra modală din exemplele librăriei basicLightbox.


galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1400" height="900">
  `);

  instance.show();

  document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && instance) {
    instance.close();
  }
  });
});


  

