// Insights category filter
(function() {
    const filters = document.getElementById('insightFilters');
    if (!filters) return;

    const buttons = filters.querySelectorAll('.insights-filter');
    const cards = document.querySelectorAll('.insights-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;

            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Show/hide cards
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
})();
