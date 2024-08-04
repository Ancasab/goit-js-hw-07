import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
    return items.map((item) => {
        const { preview, original, description } = item;
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
                </a>
            </li>`

    }).join("");
}

const renderGallery = () => {
    galleryContainer.innerHTML = createGalleryMarkup(galleryItems)
};

renderGallery();


new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionData: 'alt'
});








