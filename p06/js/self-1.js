const cart = [];
const attemptLog = [];
const products = [
    { id: 101, name: 'Мышь', price: 790, stock: 3 },
    { id: 205, name: 'Монитор', price: 15000, stock: 1 },
];

function addToCart(product, qty) {
    if (!Number.isInteger(qty) || qty < 1) {
        throw new ValidationError('qty', 'Количество должно быть целым числом не меньше 1.');
    }
    if (qty > product.stock) {
        throw new OutOfStockError(product.id, product.stock, qty);
    }
    const existing = cart.find((item) => item.productId === product.id);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ productId: product.id, name: product.name, qty: qty });
    }
    return cart;
}

function handleAdd(product, qty) {
    try {
        addToCart(product, qty);
        console.log('Добавлено:', product.name, 'x', qty);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log('Ошибка поля', error.field, error.message);
        } else if (error instanceof OutOfStockError) {
            console.log('Нет нужного количества товара', error.productId, error.available, error.requested);
        } else {
            throw error;
        }
    } finally {
        attemptLog.push({ productId: product?.id ?? null, qty: qty, time: new Date() });
        console.log('Попыток добавления:', attemptLog.length);
    }
}

handleAdd(products[0], 2);
handleAdd(products[1], 2);
handleAdd(products[0], 1.5);
console.log('Корзина:', cart);
console.log('Журнал попыток:', attemptLog);
