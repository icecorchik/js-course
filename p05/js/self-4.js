function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
function renderCard(product) {
    return `
    <article class="card">
      <h2>${escapeHtml(product.name)}</h2>
      <p>Категория: ${escapeHtml(product.category)}</p>
      <p>Цена: ${escapeHtml(product.price)} ₽</p>
      <p>На складе: ${escapeHtml(product.stock)}</p>
    </article>
  `;
}
function renderList(items) {
    return items.map(renderCard).join("");
}
const catalog = document.getElementById("catalog");
catalog.innerHTML = renderList(products);
