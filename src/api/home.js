import axios from "../utils/axios.js";
const home = {}
    home.all = (params={})=>{
        return axios.get(`/api/home/all`,{params})
    }
export default home
