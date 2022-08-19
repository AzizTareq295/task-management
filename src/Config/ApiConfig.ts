import axios from "axios";

export const baseURL = "http://localhost:3004";

const server = axios.create({
  baseURL: baseURL,
})

export default server;