import axios from "../utils/axios.js";
const home = {}
    home.all = (params={})=>{
        return axios.get(`/api/home/all`,{params})
    }
    home.navigate = () => {
        return axios.get(`/api/home/navigation`)
    }
export default home
