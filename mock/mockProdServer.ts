import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";
import homeModule from '../mock/home/home.js';
export function setupProdMockServer(){
    createProdMockServer([...homeModule])
}
