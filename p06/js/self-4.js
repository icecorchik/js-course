console.log('(1.005).toFixed(2):', (1.005).toFixed(2));

function roundMoney(value) {
    return Math.round(Number((value * 100).toPrecision(15)));
}

function formatRubles(kopecks) {
    return (kopecks / 100).toFixed(2) + ' ₽';
}

const amount = roundMoney(1.005);
console.log('Копейки:', amount, '| Сумма:', formatRubles(amount));

const totalKopecks = roundMoney(0.1) + roundMoney(0.2);
console.log('Сумма 0.1 + 0.2:', formatRubles(totalKopecks));
