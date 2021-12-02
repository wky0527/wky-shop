import axios from "../utils/axios.js";
const cart = {}
cart.all = (params={})=>{
    return axios.get(`http://localhost:3002/backend/cart/all`,{params})
}
export default cart
