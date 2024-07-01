import { images } from './img-template';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imageFragment = document.createDocumentFragment();

for (const img of images) {
  const liElem = document.createElement('li');
  liElem.classList.add('gallery-item');

  const linkElem = document.createElement('a');
  linkElem.classList.add('gallery-link');
  linkElem.href = img.original;
  liElem.append(linkElem);

  const imgElem = document.createElement('img');
  imgElem.classList.add('gallery-image');
  imgElem.src = img.preview;
  imgElem.alt = img.description;
  imgElem.style.width = '320px';
  imgElem.style.height = '200px';
  imgElem.style.transition = 'transform 250ms ease-in-out';
  imgElem.onmouseover = function () {
    this.style.transform = 'scale(1.1)';
  };
  imgElem.onmouseout = function () {
    this.style.transform = 'scale(1.0)';
  };

  linkElem.append(imgElem);

  imageFragment.append(liElem);
}

const gallery = document.querySelector('.gallery');
gallery.append(imageFragment);

gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.justifyContent = 'center';
gallery.style.columnGap = '24px';
gallery.style.rowGap = '24px';
gallery.style.paddingTop = '24px';
gallery.style.paddingLeft = '156px';
gallery.style.paddingRight = '156px';
gallery.style.maxWidth = '1140px';
gallery.style.marginLeft = 'auto';
gallery.style.marginRight = 'auto';

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
