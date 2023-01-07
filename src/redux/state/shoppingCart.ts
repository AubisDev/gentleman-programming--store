import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart } from '../../models/cart';

const shoppingCartInitialState: Cart[] = []; 


export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: shoppingCartInitialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<Cart[]>) => action.payload,

        removeItemFromCart : (state, action: PayloadAction<Cart[]>) => action.payload
    }
})

export const { addCartItem, removeItemFromCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;