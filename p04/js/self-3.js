class Cart {
    static MAX_ITEMS = 5;
    #items = [];

    #findIndex(name) {
        return this.#items.findIndex((item) => item.name === name);
    }

    add(name, price, qty = 1) {
        if (!Number.isInteger(qty) || qty < 1) {
            throw new RangeError('Количество должно быть целым числом не меньше 1');
        }

        const index = this.#findIndex(name);

        if (index >= 0) {
            this.#items[index].qty += qty;
            return;
        }

        if (this.#items.length >= Cart.MAX_ITEMS) {
            throw new RangeError(`Нельзя добавить больше ${Cart.MAX_ITEMS} позиций`);
        }

        this.#items.push({ name, price, qty });
    }

    remove(name) {
        const index = this.#findIndex(name);

        if (index >= 0) {
            this.#items.splice(index, 1);
        }
    }

    changeQty(name, qty) {
        if (!Number.isInteger(qty) || qty < 1) {
            throw new RangeError('Количество должно быть целым числом не меньше 1');
        }

        const index = this.#findIndex(name);

        if (index < 0) {
            throw new RangeError(`Товар «${name}» не найден`);
        }

        this.#items[index].qty = qty;
    }

    get total() {
        return this.#items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    get count() {
        return this.#items.length;
    }
}

const cart = new Cart();

cart.add('Клавиатура', 1250);
cart.add('Мышь', 790, 2);

cart.changeQty('Мышь', 3);

console.log('Позиций:', cart.count, 'Сумма:', cart.total, '₽');

cart.remove('Клавиатура');

console.log('После удаления — позиций:', cart.count, 'Сумма:', cart.total, '₽');

cart.add('Монитор', 15990);
cart.add('Коврик', 450);
cart.add('Наушники', 2990);
cart.add('Веб-камера', 2200);

try {
    cart.add('Телефон', 15000);
} catch (error) {
    console.log(error.name, '-', error.message);
}



//с ума сойти можно....