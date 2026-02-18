import axios from "axios";

const API_BASE_URL = "https://10.82.183.229:8443";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});
