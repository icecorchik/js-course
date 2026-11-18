const raw = `
мышь ; 790 ; Электроника
КОВРИК;450; comp acceces/аксессуары
 
Наушники ; 2990 ; Электроника
клавиатура;abc;Электроника
;60;Канцелярия
Ручка;60;Канцелярия;лишнее поле
`;
function normalizeLabel(value) {
    const lower = value.trim().toLowerCase();
    return lower ? lower[0].toUpperCase() + lower.slice(1) : "";
}
const rows = raw.split(/\r?\n/)
    .filter((line) => line.trim() !== "")
    .map((line) => {
        const parts = line.split(/\s*;\s*/);
        if (parts.length !== 3) {
            return null;
        }
        const [namePart, pricePart, categoryPart] = parts;
        const name = normalizeLabel(namePart);
        const category = normalizeLabel(categoryPart);
        const cleanPrice = pricePart.trim();
        if (!name || !category || !/^\d+(?:[.,]\d{1,2})?$/.test(cleanPrice)) {
            return null;
        }
        return {
            name: name,
            price: Number(cleanPrice.replace(",", ".")),
            category: category
        };
    })
    .filter((product) => product !== null);
console.log(rows);
