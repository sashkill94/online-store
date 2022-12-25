import { IMainParameters, Product } from '../../../common/types';
import { NewElement } from '../../../utils/element-generator';
import { Catalog } from './catalog/catalog';
import { TopPanel } from './top-panel/top-panel';
import './main.scss';
import { Filters } from './filters/filters';

class MainView {
    filters: Filters;
    topPanel: TopPanel;
    catalog: Catalog;

    constructor() {
        this.filters = new Filters();
        this.topPanel = new TopPanel();
        this.catalog = new Catalog();
    }

    render(params: Product[], filters: IMainParameters) {
        const app = <HTMLDivElement>document.getElementById('root');
        const main = NewElement.createDivElement('main');
        const mainWrapper = NewElement.createDivElement('wrapper main-wrapper');
        const leftPart = NewElement.createDivElement('main-left');
        const rightPart = NewElement.createDivElement('main-right');
        const filtering = this.filters.createFilters(filters);
        const topPanel = this.topPanel.createTopPanel(params, filters);
        const catalog = this.catalog.createCatalog(params, filters);

        app.append(main);
        main.append(mainWrapper);
        mainWrapper.append(leftPart, rightPart);
        leftPart.append(filtering);
        rightPart.append(topPanel, catalog);
    }
}

export default MainView;