import axios from "axios";
import { MOVIE_DETAILS_BASE_URL, IMAGE_BASE_URL, API_KEY, ENDPOINTS } from "../constants/urls";

const instance = axios.create({
    baseURL: MOVIE_DETAILS_BASE_URL,
    params: {
        api_key: API_KEY
    }
});

export default instance
