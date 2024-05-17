import axios from 'axios';
const API_URL = 'http://localhost:4000'

export const uploadFile = async (data) =>{
    try {
        let resp = await axios.post(`${API_URL}/upload`,data);
        return resp.data;
    } catch (error) {
        console.log("Error :", error.message);
    }
}
