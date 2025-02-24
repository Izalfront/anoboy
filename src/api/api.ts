import axios from 'axios';

const ANIME_API = import.meta.env.VITE_API_BASE_URL;

export const getAnime = async () => {
  const response = await axios.get(`${ANIME_API}/top/anime`);
  console.log(response);
  return response.data?.data || [];
};

export const getGenre = async () => {
  const response = await axios.get(`${ANIME_API}/genres/anime`);
  console.log(response);
  return response.data?.data;
};
