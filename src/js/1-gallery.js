const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

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
