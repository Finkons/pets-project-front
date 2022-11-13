import axios from "axios";
const BASE_URL = "http://localhost:3001/api/notices/";

export async function fetchPets(category) {
  return axios(`${BASE_URL}${category}`).then(response => response.data);
}

export async function fetchByName(name) {
  return axios(`${BASE_URL}?query=${name}`).then(response => response.data);
}
