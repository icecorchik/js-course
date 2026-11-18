const methods = [
    'push', 'sort', 'splice', 'map',
    'filter', 'slice', 'concat', 'toSorted'
];

const tests = [
    ['push', true],
    ['sort', true],
    ['splice', true],
    ['map', false],
    ['filter', false],
    ['slice', false],
    ['concat', false],
    ['toSorted', false]
];

tests.forEach(([method, changes]) => {
    const arr = [3, 1, 2];
    const original = [...arr];

    if (method === 'push') arr.push(4);
    if (method === 'sort') arr.sort();
    if (method === 'splice') arr.splice(1, 1);
    if (method === 'map') arr.map(x => x * 2);
    if (method === 'filter') arr.filter(x => x > 1);
    if (method === 'slice') arr.slice(1);
    if (method === 'concat') arr.concat([4]);
    if (method === 'toSorted') arr.toSorted();

    console.log(method, JSON.stringify(arr) !== JSON.stringify(original));
});