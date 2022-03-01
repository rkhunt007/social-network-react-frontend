import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:5000",
});

const token = localStorage.getItem("token", "");
instance.defaults.headers.common["x-auth-token"] = token;

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token", "");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
