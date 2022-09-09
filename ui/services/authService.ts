import { getData } from "./localStorageService";

export function getAuthToken() {
  return getData("access_token");
}
