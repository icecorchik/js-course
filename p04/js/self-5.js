class CartView {
    state = { items: [], promo: null };

    setState(patch) {
        this.state = { ...this.state, ...patch };
        console.log(this.render());
    }

    addItem(item) {
        this.setState({ items: [...this.state.items, item] });
    }

    removeItem(name) {
        this.setState({
            items: this.state.items.filter((item) => item.name !== name)
        });
    }

    applyPromo(code) {
        this.setState({ promo: code });
    }

    render() {
        const { items, promo } = this.state;

        if (items.length === 0) {
            return 'Корзина пуста';
        }

        const lines = items.map((item, index) =>
            `${index + 1}. ${item.name}: ${item.qty} × ${item.price} ₽ = ${item.qty * item.price} ₽`
        );

        const total = items.reduce(
            (sum, item) => sum + item.price * item.qty,
            0
        );

        const final = promo ? Math.round(total * 0.9) : total;

        const promoText = promo
            ? `\nПромокод: ${promo} (скидка 10%)`
            : '';

        return `${lines.join('\n')}\nИтого: ${final} ₽${promoText}`;
    }
}

const view = new CartView();

console.log(view.render());

view.addItem({ name: 'Мышь', price: 790, qty: 2 });
view.addItem({ name: 'Коврик', price: 450, qty: 1 });

view.applyPromo('SALE10');

view.removeItem('Коврик');