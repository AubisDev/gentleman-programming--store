import { Product } from "./products";

export interface Cart extends Product{
    amount: number;
}