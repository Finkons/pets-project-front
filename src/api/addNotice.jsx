import axios from "axios";
const BASE_URL = "http://localhost:3001/api/";

export async function addNotice(data) {
  try {
    const response = axios.post(`${BASE_URL}`, {
      data,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
