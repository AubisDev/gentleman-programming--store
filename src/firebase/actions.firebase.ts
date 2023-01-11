import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config.firebase";
import { getProductsAdapter } from "../adapters";


export const getProductsFB = async() => {
    try {
        let productsArr:any[] = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach( doc => productsArr.push(doc.data()));
        return getProductsAdapter(productsArr);
    } catch (error) {
        console.log(error);
    }
}

