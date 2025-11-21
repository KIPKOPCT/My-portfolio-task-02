// Smooth scroll navigation for all pages
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    // Map navigation items to their corresponding sections
    const sectionMap = {
        'Home': 'hero-container',
        'About': 'community',
        'Services': 'services-container',
        'Community': 'galaxy-container',
        'Reviews': 'reviews-container',
        'FAQ': 'faq-container'
    };

    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const linkText = this.textContent.trim();
            const targetSection = sectionMap[linkText];
            
            if (targetSection) {
                // Check if we're on index.html (has the sections)
                if (document.querySelector(`.${targetSection}`)) {
                    // Smooth scroll to section on current page
                    const section = document.querySelector(`.${targetSection}`);
                    section.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // Redirect to index.html and scroll to section
                    window.location.href = `index.html#${targetSection}`;
                }
            }
        });
    });

    // Handle hash URLs on page load
    if (window.location.hash) {
        const targetSection = window.location.hash.replace('#', '');
        const section = document.querySelector(`.${targetSection}`);
        if (section) {
            setTimeout(() => {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});

// Logo click to home page for all HTML files
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        
        // Add cursor pointer style
        logo.style.cursor = 'pointer';
    }
});



// Highlight active nav link when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const dot = document.getElementById('dot');
    let x = 0, y = 0;
    let targetX = 0, targetY = 0;
    let visible = false;

    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        dot.style.display = 'block';
        visible = true;
      }
    });

    document.addEventListener('mouseleave', () => {
      dot.style.display = 'none';
      visible = false;
    });

    // Smooth motion with easing
    function animate() {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      dot.style.transform = `translate(${x - 30}px, ${y - 30}px)`; // center dot
      requestAnimationFrame(animate);
    }
    animate();



    
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-answer").classList.remove("open");
      }
    });

    item.classList.toggle("active");
    item.querySelector(".faq-answer").classList.toggle("open");
  });
});



//scrolling logo

// Auto sliding animation for logo carousel - seamless infinite loop
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.commu-scroll');
    const logos = carousel.querySelectorAll('.scroll-logo');
    
    // Calculate total width needed for seamless loop
    const firstLogo = logos[0];
    const logoWidth = firstLogo.offsetWidth;
    const logoMargin = parseInt(getComputedStyle(firstLogo).marginLeft) + 
                       parseInt(getComputedStyle(firstLogo).marginRight);
    const totalLogoWidth = logoWidth + logoMargin;
    
    // Calculate how many clones we need to fill the viewport
    const viewportWidth = carousel.parentElement.offsetWidth;
    const clonesNeeded = Math.ceil(viewportWidth / totalLogoWidth) + 1;
    
    // Create clones for seamless looping
    for (let i = 0; i < clonesNeeded; i++) {
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            carousel.appendChild(clone);
        });
    }
    
    // Set up the animation
    carousel.style.animation = 'slideLeft 30s linear infinite';
    
    // Create keyframes for the animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideLeft {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-${totalLogoWidth * logos.length}px);
            }
        }
    `;
    document.head.appendChild(style);
});



// Auto sliding animation for review cards to the right
document.addEventListener('DOMContentLoaded', function() {
    // Review cards sliding
    const reviewContainer = document.querySelector('.review-items');
    const reviewBoxes = document.querySelectorAll('.review-box');
    
    if (reviewContainer && reviewBoxes.length > 0) {
        // Duplicate the review boxes for seamless looping
        reviewBoxes.forEach(box => {
            const clone = box.cloneNode(true);
            reviewContainer.appendChild(clone);
        });
        
        // Apply smooth animation after duplication
        const style = document.createElement('style');
        style.textContent = `
            .review-items {
                display: flex;
                gap: 20px;
                animation: slideRightReview 30s linear infinite;
            }
            .review-box {
                flex: 0 0 auto;
                width: 350px;
            }
            @keyframes slideRightReview {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(calc(-50%));
                }
            }
        `;
        document.head.appendChild(style);
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const galCycle = document.querySelector('.gal-cycle');
    const galCycle2 = document.querySelector('.gal-cycle2');
    
    if (galCycle && galCycle2) {
        // Create style element with animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rotateRight {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            @keyframes rotateLeft {
                from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Apply animations
        galCycle.style.animation = 'rotateRight 20s linear infinite';
        galCycle2.style.animation = 'rotateLeft 15s linear infinite';
        
        // Pause on hover for cycles only
        galCycle.addEventListener('mouseenter', function() {
            galCycle.style.animationPlayState = 'paused';
            galCycle2.style.animationPlayState = 'paused';
        });
        
        galCycle.addEventListener('mouseleave', function() {
            galCycle.style.animationPlayState = 'running';
            galCycle2.style.animationPlayState = 'running';
        });
        
        galCycle2.addEventListener('mouseenter', function() {
            galCycle.style.animationPlayState = 'paused';
            galCycle2.style.animationPlayState = 'paused';
        });
        
        galCycle2.addEventListener('mouseleave', function() {
            galCycle.style.animationPlayState = 'running';
            galCycle2.style.animationPlayState = 'running';
        });
    }
});