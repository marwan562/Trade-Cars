const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `bearar ${apiKey}`,
  },
});

export default axiosClient;
