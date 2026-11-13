
function parsePrice(text) {

    const cleaned = text.replace(/[^\d,.-]/g, '');

    if (cleaned === '') {
        return NaN;
    }

    const normalized = cleaned.replace(',', '.');
    const result = Number(normalized);
    return result;
}

console.log(parsePrice('1 250,50 ₽'));
console.log(parsePrice('990₽'));
console.log(parsePrice('abc'));

console.log('"5" + 3 =', '5' + 3);
console.log('"5" - 3 =', '5' - 3);
console.log('[] + {} =', [] + {});
console.log('null == undefined =', null == undefined);
