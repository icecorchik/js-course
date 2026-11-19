function level1() { return level2(); }
function level2() { return level3(); }
function level3() { return level4(); }
function level4() { throw new Error('Ошибка на четвёртом уровне'); }

try {
    level1();
} catch (error) {
    console.log(error.stack);
    const place = error.stack.split('\n').find((line) => line.includes('level4'));
    console.log('Место ошибки:', place);
}

function safe(fn) {
    return function (...args) {
        try {
            return { ok: true, value: fn(...args), error: null };
        } catch (error) {
            return { ok: false, value: null, error: error };
        }
    };
}

const safeParse = safe(JSON.parse);
console.log(safeParse('{"items": [1, 2]}'));
const failed = safeParse('{items');
console.log(failed.ok, failed.value, failed.error.name);
