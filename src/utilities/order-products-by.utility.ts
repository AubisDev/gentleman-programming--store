import { Product } from '../models';

export const OrderProductsBy = ( arr: Product[] = [], order = '' ) => {
    if( order === 'price-down'){
        return arr.sort( (a,b) => {return a.price - b.price} );
    }
    else if( order === 'price-up'){
        return arr.sort( (a,b) => {return b.price - a.price} );
    }
    return arr.sort( (a:any,b:any) => {return a.id - b.id });
}