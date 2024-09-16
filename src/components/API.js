import axios from 'axios';

const AUTH_KEY = '30720436-88ffd0ded62e0d7b7cde7caf4';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const SearchAPI = async (text, page) => {
  const response = await axios.get(
    `?q=${text}&key=${AUTH_KEY}&page=${page}&image_type=1&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
