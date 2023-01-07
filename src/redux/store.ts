import { configureStore } from '@reduxjs/toolkit'
import { Cart } from '../models';
import { Product } from '../models/products';
import { shoppingCart, products } from './state';

export interface AppStore {
  products: Product[],
  cart: Cart[]
}

const store = configureStore<AppStore>({
  reducer: {
    products: products,
    cart: shoppingCart
},
})
export type RootState = ReturnType<typeof store.getState>

export default store