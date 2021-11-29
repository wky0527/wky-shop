import axios from "../utils/axios.js";
const my = {}
my.order = (params={})=>{
    return axios.get(`http://localhost:3002/backend/my/order`,{params})
}
export default my
