

console.log('Function Declaration:');

console.log(total(100, 200));

function total(a, b) {
    return a + b;
}
//JavaScript заранее обрабатывает объявления функций типа Function Declaration. Поэтому к моменту выполнения первой строки функция total уже доступна.





// возникали ошибки поэтому нейронка меня познакомила с try и catch
console.log('Function через var:');

try {
    console.log(fee(100));
} catch (error) {
    console.log(error.name + ': ' + error.message);
}

var fee = function (p) {
    return p * 0.05;
};

console.log('После объявления:', fee(100));
//вызываем функцию неизвестную fee, избегаем ошибки и окончания функции, объявляем её с помошью var, и вызываем заново. По итогу по сути условия выполнены.




console.log('Arrow Function через let:');

try {
    console.log(tax(100));
} catch (error) {
    console.log(error.name + ': ' + error.message);
}

let tax = (p) => p * 0.2;

console.log('После объявления:', tax(100));
//по сути тоже самое что и во втором варианте, но с объявлением через let и стрелку