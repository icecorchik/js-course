const testProducts = [
    ...products,
    { id: 'xss-demo', name: '<img src=x onerror=alert(1)>', price: 0 },
];

const safeList = document.getElementById('safe-list');
const fragment = document.createDocumentFragment();

for (const product of testProducts) {
    const li = document.createElement('li');
    li.className = 'product';

    const name = document.createElement('span');
    name.textContent = product.name;

    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = `${product.price} ₽`;

    li.append(name, price);
    fragment.append(li);
}

safeList.append(fragment);

const htmlList = document.getElementById('html-list');
htmlList.innerHTML = testProducts.map((product) =>
    `<li class="product">${product.name} <span class="price">${product.price} ₽</span></li>`
).join('');
