import axios from "axios";
const apiUrl = import.meta.env.VITE_API_SERVER;
const token = localStorage.getItem("MainToken")?.trim();
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${token}`,
}
const instance = axios.create({
  baseURL: apiUrl,  
  headers,
});

export default instance