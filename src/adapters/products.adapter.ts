import { Product } from '../models/products';


export const getProductsAdapter = ( products: any) => {
    return products.data.map( (product: Product) => ({
        title: product.title,
        id: product.id,
        price: product.price,
        image: product.image
    }))
}