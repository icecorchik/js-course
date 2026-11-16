const catalog = {
    name: 'Каталог',
    children: [
        {
            name: 'Компьютеры',
            children: [
                {
                    name: 'Клавиатуры',
                    children: []
                },
                {
                    name: 'Мыши',
                    children: []
                }
            ]
        },
        {
            name: 'Кабели',
            children: []
        }
    ]
};


function findPath(node, name) {
    if (node.name === name) {
        return node.name;
    }
    for (const child of node.children) {
        const result = findPath(child, name);
        if (result !== null) {
            return node.name + ' / ' + result;
        }
    }
    return null;
}


console.log(findPath(catalog, 'Мыши'));
console.log(findPath(catalog, 'Клавиатуры'));
console.log(findPath(catalog, 'Кабели'));
console.log(findPath(catalog, 'Мониторы'));