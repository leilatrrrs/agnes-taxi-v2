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


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

