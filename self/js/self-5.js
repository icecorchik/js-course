document.getElementById('measure').addEventListener('click', () => {
    for (const size of [100, 1000, 5000]) {
        const many = Array.from({ length: size }, (_, index) => ({
            id: index + 1,
            name: `Товар ${index + 1}`,
            price: 100 + index,
        }));

        const start = performance.now();
        setState({ products: many, search: '' });
        const finish = performance.now();

        console.log(`Перерисовка ${size} товаров: ${(finish - start).toFixed(2)} мс`);
    }
});
