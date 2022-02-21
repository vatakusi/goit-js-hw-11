const fetchDate = (searchWord, page) => {
  const BASE_URL = 'https://pixabay.com/api';
  const AUTH_KEY = '9883823-ee8e79fda17564929f9f81cb0';

  console.log(page);

  const row = `${BASE_URL}/?key=${AUTH_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return fetch(row).then(response => {
    if (!response.ok) {
      console.log('err');
      return Promise.reject(new Error('Not found'));
    }

    console.log('ok');
    return response.json();
  });
};

export { fetchDate };
