function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
function renderCard(product) {
    const hasDiscount =
        product.oldPrice !== null &&
        product.oldPrice !== undefined &&
        Number(product.oldPrice) > Number(product.price);
    return `
    <article class="card">
      <h2>${escapeHtml(product.name)}</h2>
      <p>Категория: ${escapeHtml(product.category)}</p>
      <p>Цена: ${escapeHtml(product.price)} ₽</p>
      ${product.stock === 0 ? '<span class="badge">Нет в наличии</span>' : ''}
      ${hasDiscount ? `<p>Старая цена: <del>${escapeHtml(product.oldPrice)} ₽</del></p>` : ""}
      <p>На складе: ${escapeHtml(product.stock)}</p>
    </article>
  `;
}
function renderList(items) {
    return items.map(renderCard).join("");
}
const catalog = document.getElementById("catalog");
catalog.innerHTML = renderList(products);
