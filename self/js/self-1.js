const cards = document.querySelectorAll('.project-card');

cards.forEach((card, index) => {
    card.dataset.index = index + 1;
    card.querySelectorAll('h1, h2, h3').forEach((heading) => {
        heading.classList.add('heading-accent');
    });
});

if (cards.length > 0) {
    cards[cards.length - 1].remove();
}

const workButton = [...document.querySelectorAll('a, button')].find((element) =>
    element.textContent.trim().includes('Work With Us')
);

if (!workButton) {
    console.warn('Кнопка Work With Us не найдена. Проверь текст и селектор.');
} else {
    const path = [];
    let current = workButton;

    while (current) {
        path.push(current.tagName.toLowerCase());
        if (current === document.body) break;
        current = current.parentElement;
    }

    console.log('Путь от кнопки до body:', path.join(' → '));
}

console.log('Карточек осталось:', document.querySelectorAll('.project-card').length);
