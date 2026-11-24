
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").textContent =
        `Thank you, ${name}! Your message has been received.`;

    contactForm.reset();
});

// Reveal animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(
    ".service-card, .about-content, .about-image, .project-grid img"
).forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";
    observer.observe(element);
});
