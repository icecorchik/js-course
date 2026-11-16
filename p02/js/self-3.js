function createIdGenerator(prefix) {

    let counter = 0;

    function generateId() {
        counter++;

        return `${prefix}-${counter}`;
    }

    generateId.reset = function () {
        counter = 0;
    };

    return generateId;
}




const orderGenerator = createIdGenerator('ORD');

const userGenerator = createIdGenerator('USR');




console.log(orderGenerator());
console.log(orderGenerator());




console.log(userGenerator());
console.log(userGenerator());




orderGenerator.reset();

console.log('После сброса:', orderGenerator());

console.log('Генератор пользователей:', userGenerator());