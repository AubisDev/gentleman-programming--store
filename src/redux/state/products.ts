import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../models/products.model';

const productsInitialState: Product[] = []; 


export const productSlice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {
        getAllProducts: (state, action: PayloadAction<Product[]>) => action.payload,

        filterProductBy : (state, action: PayloadAction<Product[]>) => action.payload
    }
})

export const { getAllProducts, filterProductBy } = productSlice.actions;

export default productSlice.reducer;