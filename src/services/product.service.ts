import { loadAbort } from "../utilities";
import { Product } from '../models/products';
import axios from "axios";

export const getProducts = () => {
    const controller = loadAbort();
    return { 
        call: axios.get<Product[]>("https://fakestoreapi.com/products", { signal: controller.signal}),
        controller
    }
    
}