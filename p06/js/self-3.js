const orderDate = new Date(2026, 8, 4);

function addBusinessDays(date, count) {
    const result = new Date(date);
    let remaining = count;
    while (remaining > 0) {
        result.setDate(result.getDate() + 1);
        const weekday = result.getDay();
        if (weekday !== 0 && weekday !== 6) {
            remaining--;
        }
    }
    return result;
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}.${date.getFullYear()}`;
}

const deliveryDate = addBusinessDays(orderDate, 3);
const monthEnd = new Date(orderDate.getFullYear(), orderDate.getMonth() + 1, 0);
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const daysToMonthEnd = Math.round((monthEnd - orderDate) / MS_PER_DAY);

console.log('Заказ:', formatDate(orderDate));
console.log('Доставка:', formatDate(deliveryDate));
console.log('Дней до конца месяца:', daysToMonthEnd);
