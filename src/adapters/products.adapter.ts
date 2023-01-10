import { Product } from '../models/products.model';


export const getProductsAdapter = ( products: any) => {
    return products.map( (product: Product) => ({
        title: product.title,
        id: product.id,
        price: product.price,
        image: product.image
    }))
}