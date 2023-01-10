import { Cart } from '../models/cart.model';
import { Product } from '../models/products.model';

export const checkItemExistency = ( currentCart: Cart[], productId: string ) => {
   return currentCart.some( item => item.id === productId );
}

export const createNewCartItem = (currentCart:Cart[], product:Product ) => {
    let newProduct:Cart = {...product, amount:1 };
    let newCartState:Cart[] = [...currentCart, newProduct];
    return newCartState
}

export const updateItemAmount = ( currentCart:Cart[], id:string ) => {
    let newCartState:Cart[] = [...currentCart].map( elem => {
        return elem.id === id ? {...elem, amount: elem.amount+1} : elem;
    })
    return newCartState;
}

export const deleteItem = (currentCart: Cart[], id:string) => {
    return [...currentCart].filter( item => item.id !== id);
}


export const getTotalPrice = (currentCart:Cart[]) => {
    let total = 0;
    currentCart.forEach( item => total+= item.price*item.amount);
    return total;
}