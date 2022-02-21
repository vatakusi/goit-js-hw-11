// Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

import Notiflix from 'notiflix';
import { fetchDate } from './fetchDate.js';
// import EventsApi from './fetchDate.js';
// import ApiServce from './fetchDate.js';
// import markupSearch from './markupSearch';
import refs from './refs.js';

let page = 1;
let searchWord = '';

const lightbox = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  clearRender();
  page = 1;
  searchWord = refs.form.elements.searchQuery.value;
  getImages();
}
/////////////// fin reserv

function renderSearches(message) {
  const markup = message
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <div class="photo-card">
      <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
      <div class="info">
          <p class="info-item">
            <b>${likes}</b>
          </p>
          <p class="info-item">
            <b>${views}</b>
          </p>
          <p class="info-item">
            <b>${comments}</b>
          </p>
          <p class="info-item">
            <b>${downloads}</b>
          </p>
      </div>
    </div>`,
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function clearRender() {
  refs.gallery.innerHTML = '';
}

function showLoadMoreBtn(on) {
  if (on) {
    refs.btn.classList.remove('is-hidden');
  } else {
    refs.btn.classList.add('is-hidden');
  }
}

refs.btn.addEventListener('click', handleLoadMore);

function handleLoadMore(ev) {
  page += 1;
  getImages();
}

const getImages = () => {
  refs.btn.disabled = true;
  fetchDate(searchWord, page).then(data => {
    if (data.hits.length === 0) {
      showLoadMoreBtn();
      console.log(data.hits);
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.',
      );
    } else if (searchWord === '') {
      showLoadMoreBtn(searchWord);
      clearRender();
      // console.log('What?');
      Notiflix.Notify.failure("You didn't enter a request, are you all right?");
    } else {
      renderSearches(data.hits);
      showLoadMoreBtn(searchWord);
      refs.btn.disabled = false;
      Notiflix.Notify.success('Hooray! We found ' + data.totalHits + ' images.');
    }

    if (data.totalHits <= page * 40) {
      Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
      showLoadMoreBtn();
    }
  });
};

// const lightbox = new SimpleLightbox('.photo-card a', {
//   captions: true,
//   captionDelay: 250,
//   captionsData: 'alt',
// });

///////////////////////////////////////// ens of var 1
