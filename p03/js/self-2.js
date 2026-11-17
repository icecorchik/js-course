const original = {
    id: 1,
    name: 'Клавиатура',
    price: 1250,
    dimensions: {
        width: 44,
        height: 3,
        depth: 13
    },
    tags: ['usb', 'rgb']
};

const spreadCopy = { ...original };
const assignCopy = Object.assign({}, original);
const deepCopy = structuredClone(original);

spreadCopy.dimensions.width = 45;
console.log('После spread:', original.dimensions.width);

assignCopy.dimensions.width = 46;
console.log('После Object.assign:', original.dimensions.width);

deepCopy.dimensions.width = 47;
console.log('После structuredClone:');
console.log('original:', original.dimensions.width);
console.log('deepCopy:', deepCopy.dimensions.width);
console.log('spreadCopy:', spreadCopy.dimensions.width);
console.log('assignCopy:', assignCopy.dimensions.width);