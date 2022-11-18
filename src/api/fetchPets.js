import axios from "axios";
const BASE_URL = "http://localhost:3001/api/notices/";

export async function fetchPets(category) {
  return axios(`${BASE_URL}category/${category}`).then(response => response.data);
}

export async function fetchByName(name) {
  return axios(`${BASE_URL}?query=${name}`).then(response => response.data);
}

export async function fetchById(id) {
  return axios(`${BASE_URL}/id/${id}`).then(response => response.data);
}

export async function deleteById(id) {
  return axios.delete(`${BASE_URL}/id/${id}`).then(response => response.data);
}

export async function fetchFavoritePets() {
  return axios(`${BASE_URL}favorite`).then(response => response.data);
}

export async function fetchOwnPets() {
  return axios(`${BASE_URL}own`).then(response => response.data);
}
