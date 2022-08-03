import axios from "axios";

const ROCKET_BASE_REST_API_URL = 'http://localhost:8080/v1/api/rockets';

class RocketService{

    getAllRockets(){
        return axios.get(ROCKET_BASE_REST_API_URL)
    }
}

export default new RocketService();