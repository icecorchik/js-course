class CartLine {
    #qty = 1;

    constructor(name, price, qty = 1) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    get qty() {
        return this.#qty;
    }

    set qty(value) {
        if (!Number.isInteger(value) || value < 1) {
            throw new RangeError(`Недопустимое количество: ${value}`);
        }

        this.#qty = value;
    }

    get sum() {
        return this.price * this.#qty;
    }
}

const cart = [];

function addToCart(name, price, qty) {
    try {
        const line = new CartLine(name, price, qty);

        cart.push(line);

        console.log('Добавлен товар:', line.name, 'Сумма:', line.sum, '₽');
    } catch (error) {
        console.log(error.name, '-', error.message);
    }
}

addToCart('Мышь', 790, 2);
addToCart('Клавиатура', 1250, 0);
addToCart('Коврик', 450, 1);

console.log('Позиций в корзине:', cart.length);