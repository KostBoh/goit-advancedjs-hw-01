// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createMarkup = galleryItems
  .map(
    ({ original, description, preview }) => `
      <li>
        <a href="${original}" data-lightbox="gallery" data-title="${description}">
          <img src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', createMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  captionDelay: 250,
});
