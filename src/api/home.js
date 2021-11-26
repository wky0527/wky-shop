import axios from "../utils/axios.js";
const home = {}
    home.all = (params={})=>{
        return axios.get(`http://localhost:3002/backend/home/all`,{params})
    }
export default home
