import axios from "axios";
const BASE_URL = "https://localhost3001/api/notices/";

export async function fetchPets(category) {
  return axios(`${BASE_URL}${category}`).then(response => response.data);
}
