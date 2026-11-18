const articleRe = /^[A-Z]{2}-\d{5}$/;
const phoneRe = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const emailRe = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
function checkSamples(label, regexp, validValues, invalidValues) {
    console.log(`\n${label}`);
    console.log("Валидные примеры:");
    for (const value of validValues) {
        console.log(value, "=>", regexp.test(value));
    }
    console.log("Невалидные примеры:");
    for (const value of invalidValues) {
        console.log(value, "=>", regexp.test(value));
    }
}
checkSamples("Артикул", articleRe,
    ["AB-12345", "XY-00001", "CD-98765"],
    ["A-12345", "Ab-12345", "AB-1234"]);
checkSamples("Телефон", phoneRe,
    ["+7 (999) 123-45-67", "+7 (912) 345-67-89", "+7 (800) 555-35-35"],
    ["8 (999) 123-45-67", "+7 (99) 123-45-67", "+7 (999) 1234567"]);
checkSamples("Email", emailRe,
    ["user@example.com", "name.surname@mail.ru", "shop_5@site.org"],
    ["user.example.com", "name@site", "name@@site.com"]);
