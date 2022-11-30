import axios from "axios";
const BASE_URL = "https://pets-api-m614.onrender.com/api/";

export async function addNotice(data) {
  try {
    const response = axios.post(`${BASE_URL}`, {
      data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
