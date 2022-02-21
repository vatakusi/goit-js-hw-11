const markupSearch = data => {
  data
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <div class="photo-card">
      <img src="${largeImageURL}" alt="${tags}" loading="lazy" />
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
  //   refs.gallery.insertAdjacentHTML('afterbegin', markup);
  //   console.log(markupSearch);
};

export default markupSearch;
