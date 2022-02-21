// const page = '';

// const fetchDate = searchWord => {
//   const BASE_URL = 'https://pixabay.com/api';
//   const AUTH_KEY = '9883823-ee8e79fda17564929f9f81cb0';
//   return fetch(
//     `${BASE_URL}/?key=${AUTH_KEY}=${searchWord}&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true`,
//   )
//     .then(response => {
//       if (!response.ok) {
//         return Promise.reject(new Error('Not found'));
//       }
//       return response.json();
//     })
//     .catch(error => console.log(error));
// };

// export { fetchDate };

///// //

// class EventsApi {
//   static BASE_URL = 'https://pixabay.com/api';
//   #AUTH_KEY = '9883823-ee8e79fda17564929f9f81cb0';
//   #page = 1;
//   #searchWord;
//   constructor(searchWord = '') {
//     this.#searchWord = searchWord;
//   }

//   fetchDate = safesearch => {
//     return fetch(
//       `${EventsApi.BASE_URL}/?key=${AUTH_KEY}&q=${searchWord}&image_type=photo&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`,
//     ).then(response => {
//       console.log(111);
//       if (!response.ok) {
//         return Promise.reject(new Error('Not found'));
//       }
//       return response.json();
//     });
//   };
// }

// export default EventsApi;

///////////////////////// 1

// class ApiServce {
//   #AUTH_KEY = '9883823-ee8e79fda17564929f9f81cb0';
//   BASE_URL = 'https://pixabay.com/api';
//   #page = 1;
//   searchWord = '';
//   constructor(searchWord = '') {
//     this.searchWord = searchWord;
//   }

//   fetchDate() {
//     const queryParams = new URLSearchParams({
//       api_key: this.#AUTH_KEY,
//       page: this.#page,
//     });

//     return fetch(
//       `${this.BASE_URL}/?key=${this.#AUTH_KEY}&q=${
//         this.searchWord
//       }&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.#page}`,
//     ).then(res => {
//       if (res.status === 404) {
//         return Promise.reject(new Error('Not Found'));
//       }
//       return res.json();
//     });
//   }
// }

// export default ApiServce;

////////////////// end 1

///////////////////// for var 1:

const fetchDate = (searchWord, page) => {
  //   const page = 1;

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

//////////////// ens of for var 1
