import axios from "axios";
import { getAuthToken } from "./authService";

const baseURL = "https://village-app-api.herokuapp.com";

const http = axios.create({
  baseURL,
});

const authHttp = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${getAuthToken()}`,
  },
});

export { http, authHttp };
