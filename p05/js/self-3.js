class ProductList extends Array {

    byCategory(name) {
        return this.filter((p) => p.category === name);
    }

    totalPrice() {
        return this.reduce((sum, p) => sum + p.price, 0);
    }

    cheapest() {
        return this.reduce((min, p) =>
            p.price < min.price ? p : min
        );
    }
}

const catalog = ProductList.from(products);

const electronics = catalog.byCategory('Электроника');

console.log('Электроника:', electronics);
console.log('Стоимость:', catalog.totalPrice());
console.log('Самый дешёвый товар:', catalog.cheapest());
console.log('Является ProductList:', electronics instanceof ProductList);