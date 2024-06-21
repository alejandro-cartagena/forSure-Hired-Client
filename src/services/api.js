import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const json = localStorage.getItem("authToken");
    if (json) {
      config.headers.authorization = `Bearer ${json}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
