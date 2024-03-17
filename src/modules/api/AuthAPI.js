import axios from "axios";
import { BASEURL } from "./baseURL";

export const Login = async (username, password) => {
    try {
        const response = await axios.post(`${BASEURL}/login`, { username, password });
        console.log(response.data);
        return response.data; 
    } catch (error) {
        console.error("Login error:", error);
        throw error; 
    }
};
