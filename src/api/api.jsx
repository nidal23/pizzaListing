import axios from "axios";

const API_URL = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";

export const getPizzas = () => {
  return axios.get(API_URL);
};
