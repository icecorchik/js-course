let log = function (message) {
    console.log(message);


    log = function (message) {
        console.log('[повтор] ' + message);
    };
};


log('Пользователь открыл магазин');
log('Пользователь открыл каталог');
log('Пользователь добавил товар в корзину');
log('Пользователь оформил заказ');