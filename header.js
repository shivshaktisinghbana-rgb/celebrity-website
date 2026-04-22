document.addEventListener('DOMContentLoaded', function () {

    // 🔥 use event delegation (BEST FIX)
    document.addEventListener('click', function (e) {

        // 👉 MENU TOGGLE
        if (e.target.closest('.menu-toggle')) {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        }

        // 👉 DROPDOWN (mobile)
        if (e.target.closest('.menu-item-has-children > a')) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                const parent = e.target.closest('.menu-item-has-children');
                parent.classList.toggle('open');
            }
        }

        // 👉 NORMAL LINK CLICK → menu close
        if (e.target.closest('.nav-menu > li > a')) {
            const link = e.target.closest('a');

            if (!link.parentElement.classList.contains('menu-item-has-children')) {
                document.querySelector('.nav-menu').classList.remove('active');
            }
        }

    });

    // 👉 smooth scroll (safe)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === "#" || href.length <= 1) return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});