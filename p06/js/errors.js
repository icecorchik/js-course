class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

class OutOfStockError extends Error {
    constructor(productId, available, requested) {
        super(`Товар ${productId}: доступно ${available}, запрошено ${requested}.`);
        this.name = 'OutOfStockError';
        this.productId = productId;
        this.available = available;
        this.requested = requested;
    }
}
