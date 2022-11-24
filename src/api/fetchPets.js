import axios from "axios";
const BASE_URL = "https://pets-api-m614.onrender.com/api/notices/";

export async function fetchPets(category) {
  const response = await axios(`${BASE_URL}category/${category}`);
  return response.data;
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

export async function fetchFavoritePets(token) {
  const response = await axios(`${BASE_URL}owner/favorite`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}

export async function fetchOwnPets(token) {
  const response = await axios(`${BASE_URL}owner/:owner`, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
}
