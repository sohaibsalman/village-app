import axios from "axios";

const baseURL = "https://village-app-api.herokuapp.com";

const http = axios.create({
  baseURL,
});

export { http };
