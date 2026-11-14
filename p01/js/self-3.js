const READ = 1;
const WRITE = 2;
const DELETE = 4;
const ADMIN = 8;

function describe(perms) {


    const result = [];

    if ((perms & READ) !== 0) {
        result.push('чтение');
    }

    if ((perms & WRITE) !== 0) {
        result.push('запись');
    }

    if ((perms & DELETE) !== 0) {
        result.push('удаление');
    }

    if ((perms & ADMIN) !== 0) {
        result.push('администратор');
    }

    return result.join(', ');
}

console.log(describe(READ | DELETE));
console.log(describe(READ | WRITE));
console.log(describe(READ | WRITE | DELETE | ADMIN));



//позднее добавление коммита