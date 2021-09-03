import axios from "axios";

export default axios.create({
  baseURL: `${process.env.DOCKER ? "/api" : "http://localhost:8090"}/api/v1`,
  headers: { "Content-type": "application/json" },
});
