class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    shippingCost() {
        return 0;
    }
}

class PhysicalProduct extends Product {
    constructor(name, price, weightKg) {
        super(name, price);
        this.weightKg = weightKg;
    }

    shippingCost() {
        return 300 + Math.ceil(this.weightKg) * 50;
    }
}

class DigitalProduct extends Product {
    shippingCost() {
        return 0;
    }
}

const monitor = new PhysicalProduct('Монитор', 15990, 4.2);
const game = new DigitalProduct('Игра', 2499);
const mouse = new PhysicalProduct('Мышь', 790, 0.2);

const order = [monitor, game, mouse];

let totalShipping = 0;

for (const item of order) {
    totalShipping += item.shippingCost();
}

console.log('Доставка заказа:', totalShipping, '₽');