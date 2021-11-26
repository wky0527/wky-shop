import axios from "../utils/axios.js";
const home = {}
    home.all = (params={})=>{
        return axios.get(`http://10.1.3.15:3002/backend/home/all`,{params})
    }
export default home
