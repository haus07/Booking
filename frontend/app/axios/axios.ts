import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3636", // URL backend NestJS
  withCredentials: true,            // nếu backend có cookie
  headers: {
    "Content-Type": "application/json",
  },
});

export default api