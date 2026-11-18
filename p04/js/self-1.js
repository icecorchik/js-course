class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    describe() {
        return `${this.name}: ${this.price} ₽`;
    }

    static fromJSON(obj) {
        return new Product(obj.name, obj.price);
    }

    toJSON() {
        return { name: this.name, price: this.price };
    }
}

const keyboard = new Product('Клавиатура', 1250);
const json = JSON.stringify(keyboard);
const restored = Product.fromJSON(JSON.parse(json));

console.log(keyboard.describe());
console.log(json);
console.log(restored.describe());
console.log(restored instanceof Product);
console.log(Object.getPrototypeOf(restored) === Product.prototype);
console.log(keyboard.describe === restored.describe);