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
