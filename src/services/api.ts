import axios from "axios";
import { parseCookies } from "nookies";

const { "todoList.token": token } = parseCookies()



export const api = axios.create({
  baseURL: "http://localhost:4000",
});
