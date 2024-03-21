import axios from "axios";

const BASE_URL = "/api";

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    Authorization: "secret_m8GCjMQ9XHlFLbBLhzmtcx8KEsNMZ3T1eysbLaWVAnN",
    "Notion-Version": "2022-06-28",
  },
});

export default api;
