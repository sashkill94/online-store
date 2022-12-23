import { NewElement } from '../../../../../utils/element-generator';
import './product-buttons.scss';

class ProductButtons {
    getButtonsBlock(id: number, inCart = false) {
        const container = NewElement.createDivElement('product-buttons');
        const cartButton = NewElement.createButton(
            'product-buttons__cart product-button',
            inCart ? 'Remove from cart' : 'Add to cart'
        );
        cartButton.onclick = this.toCartHandler.bind(null, id);
        const buyButton = NewElement.createButton('product-buttons__buy product-button', 'Buy now');
        buyButton.onclick = this.buyHandler.bind(null, id);
        const buyLink = NewElement.createAnchor('router-link', '', '/cart');
        buyLink.append(buyButton);
        container.append(cartButton, buyLink);
        return container;
    }

    private toCartHandler(id: number) {
        //to cart logic
        console.log(`To card, id - ${id}`);
    }

    private buyHandler(id: number) {
        //to cart logic
        console.log(`To card, id - ${id}`);
    }
}

export default ProductButtons;