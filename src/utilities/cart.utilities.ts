import { Cart } from '../models/cart';

export const checkItemExistency = ( cart:Cart[], productId: string ) => {
    return cart.some( (item: Cart) => Number(item.id) === Number(productId));
}

export const addItemToCart = ( currentCart: Cart[], product:Cart ) => {
    let newProduct = {...product, amount:1 };
    let newCartState:Cart[] = [...currentCart, newProduct];
    return newCartState
}

export const updateCartItemAmount = ( currentCart: Cart[], id:string ) => {
    let itemToUpdate = (currentCart.find( elem => elem.id === id));
    if (itemToUpdate){
        itemToUpdate.amount = itemToUpdate?.amount + 1;
    }
    
}
