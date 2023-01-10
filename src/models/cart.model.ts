import { Product } from "./products.model";

export interface Cart extends Product{
    amount: number;
}