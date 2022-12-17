import Router from '../../services/Router';

class Cart {
    router: Router;
    constructor(router: Router) {
        this.router = router;
    }

    render() {
        const app = <HTMLDivElement>document.getElementById('app');
        app.textContent = 'This id cart!';
    }
}

export default Cart;
