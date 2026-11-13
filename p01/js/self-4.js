function statusSwitch(code) {
    switch (code) {
        case 0:
            return 'Новый';

        case 1:
            return 'Оплачен';

        case 2:
            return 'Отправлен';

        case 3:
            return 'Доставлен';

        case 4:
            return 'Отменён';

        default:
            return 'Неизвестный статус';
    }
}

function statusTernary(code) {
    return code === 0 ? 'Новый' :
        code === 1 ? 'Оплачен' :              //        \ +  
            code === 2 ? 'Отправлен' :        //         {}\
                code === 3 ? 'Доставлен' :    //         /\
                    code === 4 ? 'Отменён' :
                        'Неизвестный статус';
}


const statuses = {
    0: 'Новый',
    1: 'Оплачен',
    2: 'Отправлен',
    3: 'Доставлен',
    4: 'Отменён'
};

function statusObject(code) {
    return statuses[code] ?? 'Неизвестный статус';
}

console.log(statusSwitch(2));
console.log(statusTernary(2));
console.log(statusObject(2));

console.log(statusObject(5));
