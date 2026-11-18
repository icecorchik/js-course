function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function highlight(text, query) {
    const safeText = escapeHtml(text);
    if (query === "" || query === null || query === undefined) {
        return safeText;
    }
    const safeQuery = escapeHtml(query);
    const re = new RegExp(escapeRegExp(safeQuery), "gi");
    return safeText.replace(re, (found) => `<mark>${found}</mark>`);
}
function parsePrice(text) {
    const re = /^\s*от\s+(?<from>[\d\s]+?)\s+до\s+(?<to>[\d\s]+?)\s*₽\s*$/i;
    const found = text.match(re);
    if (!found) {
        return null;
    }
    return {
        from: Number(found.groups.from.replace(/\s/g, "")),
        to: Number(found.groups.to.replace(/\s/g, ""))
    };
}
console.log(highlight("<b>Мышь</b> и мышь", "мыш"));
console.log(highlight("Цена 1.5 тыс. и 105 руб.", "1.5"));
console.log(parsePrice("от 1 250 до 3 000 ₽"));
console.log(parsePrice("Цена договорная"));
