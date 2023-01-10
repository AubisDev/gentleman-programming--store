import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../../models/cart.model';

const shoppingCartInitialState: Cart[] = []; 


export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: shoppingCartInitialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<Cart[]>) => action.payload,
        updateCartitem: (state, action: PayloadAction<Cart[]>) => action.payload,
        removeCartItem : (state, action: PayloadAction<Cart[]>) => action.payload,
    }
})

export const { addCartItem, removeCartItem,updateCartitem } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;