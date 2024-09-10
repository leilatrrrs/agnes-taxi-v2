document.addEventListener('DOMContentLoaded', function() {
    const h2 = document.querySelector('.fade-in-element');
    const callBtn = document.querySelector('.call-btn');

    function checkVisibility() {
        const h2Position = h2.getBoundingClientRect().top;
        const callBtnPosition = callBtn.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (h2Position < screenPosition) {
            h2.classList.add('show');
        }
        if (callBtnPosition < screenPosition) {
            callBtn.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkVisibility);
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    function checkVisibility() {
        const screenPosition = window.innerHeight / 1.2;

        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;

            if (cardPosition < screenPosition) {
                card.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
});