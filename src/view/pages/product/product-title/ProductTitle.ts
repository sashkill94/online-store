import { ElementsFactory } from '../../../../utils/element-generator';
import Rating from '../../../common-components/rating/Rating';
import './product-title.scss';

class ProductTitle {
    getProductTitle(title: string, rating: number) {
        const titleAndRating = ElementsFactory.createDivElement('title-rating');
        const titleBlock = ElementsFactory.createBaseElementWithText(
            'p',
            'title-rating__title',
            title[0].toUpperCase() + title.slice(1)
        );
        const ratingBlock = Rating.getRatingBlock(rating);
        titleAndRating.append(titleBlock, ratingBlock);
        return titleAndRating;
    }
}

export default ProductTitle;
