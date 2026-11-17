function diff(objA, objB) {
    const changed = [];

    for (const [key, value] of Object.entries(objB)) {
        if (!Object.hasOwn(objA, key) || objA[key] !== value) {
            changed.push(key);
        }
    }

    for (const key of Object.keys(objA)) {
        if (!Object.hasOwn(objB, key)) {
            changed.push(key);
        }
    }

    return changed;
}

const before = {
    name: 'Клавиатура',
    price: 1250,
    stock: 10,
    color: 'чёрный'
};

const after = {
    name: 'Клавиатура Pro',
    price: 1190,
    stock: 10
};

console.log('Изменившиеся свойства:', diff(before, after));