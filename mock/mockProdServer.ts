import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";
import homeModule from '../mock/home/home.js';
debugger
export function setupProdMockServer(){
    createProdMockServer([...homeModule])
}
