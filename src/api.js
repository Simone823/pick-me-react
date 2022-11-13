// import axios
import axios from "axios";

// instance axios custom
const instance = axios.create({
    baseURL: process.env.REACT_APP_UNSPLASH_URL,
    headers: {
        "Content-Type": 'application/json',
        "Accept-Version": 'v1',
        "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
    }
});

export default instance;