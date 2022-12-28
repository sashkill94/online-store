import { CartProduct, CartResponse, Product, ProductResponse } from 'common/types';
import dataAnswer from 'assets/tempData/data.json';

export default class MappingService {
    //It's Mock. There we will contain our class, that contains array of Product (response from API)
    data: ProductResponse[];

    constructor() {
        this.data = dataAnswer.products;
    }

    mapFromProductResponseToProduct(productResponse: ProductResponse): Product {
        const currentPrice = Math.ceil(productResponse.price * (100 - productResponse.discountPercentage)) / 100;
        return Object.assign(productResponse, { currentPrice: currentPrice });
    }

    mapFromCartResponseToCartProduct(cartResponse: CartResponse): CartProduct | null {
        const target = this.data.find((el) => el.id === cartResponse.id);
        if (target) {
            const targetProduct = this.mapFromProductResponseToProduct(target);
            const subtotal = parseFloat((targetProduct.currentPrice * cartResponse.quantity).toFixed(2));
            return Object.assign(targetProduct, { quantity: cartResponse.quantity, subtotal: subtotal });
        }
        return null;
    }
}