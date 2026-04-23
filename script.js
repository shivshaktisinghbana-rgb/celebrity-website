// Main JavaScript - Light Theme - One Be One
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Load Header and Footer dynamically
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // Re-initialize header scripts after load
            const headerScript = document.createElement('script');
            headerScript.src = 'header.js';
            document.body.appendChild(headerScript);
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            const footerScript = document.createElement('script');
            footerScript.src = 'footer.js';
            document.body.appendChild(footerScript);
        });

    // Services Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    if (tabBtns.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                tabPanes.forEach(pane => pane.classList.remove('active'));
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Testimonial Slider
    let slides = document.querySelectorAll('.slide-light');
    let dots = document.querySelectorAll('.dot-light');
    let currentSlide = 0;
    
    function showSlide(index) {
        if (!slides.length) return;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    if (dots.length) {
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                currentSlide = idx;
                showSlide(currentSlide);
            });
        });
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item-light');
    faqItems.forEach(item => {
        const questionDiv = item.querySelector('.faq-question-light');
        if (questionDiv) {
            questionDiv.addEventListener('click', () => {
                faqItems.forEach(other => {
                    if (other !== item && other.classList.contains('active')) {
                        other.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            });
        }
    });

    // Contact Form
    const contactForm = document.getElementById('celebrity-contact');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Your inquiry has been sent to our private atelier. A stylist will respond within 24 hours.');
            contactForm.reset();
        });
    }

    // Gallery background images
    const galleryItems = document.querySelectorAll('.gallery-item');
    const images = [
        'https://placehold.co/600x500/f5f0e8/c8a86b?text=Celebrity+Fit',
        'https://placehold.co/600x500/f5f0e8/c8a86b?text=Couture',
        'https://placehold.co/600x500/f5f0e8/c8a86b?text=Red+Carpet',
        'https://placehold.co/600x500/f5f0e8/c8a86b?text=Atelier'
    ];
    galleryItems.forEach((item, idx) => {
        if (idx < images.length) {
            item.style.backgroundImage = `url(${images[idx]})`;
            item.style.backgroundSize = 'cover';
            item.style.backgroundPosition = 'center';
        }
    });
});

//   store section js
  var swiper = new Swiper(".storeSwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });


var swiper = new Swiper(".storeSwiper", {
    slidesPerView: 1,   // 🔥 ONLY ONE IMAGE
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// cetagory

document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        // remove active
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));

        // add active
        this.classList.add("active");
        document.getElementById(this.dataset.tab).classList.add("active");
    });
});


new Swiper(".atelierSwiper1", { loop:true, autoplay:{delay:2500} });
new Swiper(".atelierSwiper2", { loop:true, autoplay:{delay:2500} });
