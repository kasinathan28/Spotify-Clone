import { BASEURL } from "./baseURL";
import axios from 'axios';

export const Login = async (username, password) => {
    try {
        const response = await axios.post(`${BASEURL}/login`, { username, password });
        const userId = response.data.userId; // Assuming the user ID is returned as 'userId' in the response

        console.log("Login successful. User ID:", userId);
        
        return userId;

    } catch (error) {
        console.error("Login error:", error);
        throw error; 
    }
};
