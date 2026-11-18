const expensive = products
    .filter((p) => p.category === 'Электроника' && p.price > 1000)
    .toSorted((a, b) => b.price - a.price)
    .map((p) => p.name);

console.log('Товары:', expensive);






const stockValue = products.reduce(
    (sum, p) => sum + p.price * p.stock,
    0
);
console.log('Стоимость склада:', stockValue);






const groups = products.reduce((result, p) => {
    result[p.category] = result[p.category] || [];
    result[p.category].push(p.name);
    return result;
}, {});
console.log('Группы товаров:', groups);