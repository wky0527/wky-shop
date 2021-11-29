import axios from "../utils/axios.js";
const navigation = {}
navigation.navigate = () => {
    return axios.get(`http://localhost:3002/backend/navigation`)
}
export default navigation
