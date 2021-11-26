import axios from "../utils/axios.js";
const navigation = {}
navigation.navigate = () => {
    return axios.get(`http://10.1.3.15:3002/backend/navigation`)
}
export default navigation
