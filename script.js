// Simple interaction for the "Add to Cart" buttons
const buttons = document.querySelectorAll('.btn-shop');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Change button text temporarily
        const originalText = button.innerText;
        button.innerText = "ADDED! ⚡";
        button.style.background = "#00e5ff";
        button.style.border = "2px solid #00e5ff";
        button.style.color = "#000";

        // Revert back after 2 seconds
        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = "transparent";
            button.style.border = "2px solid #fff";
            button.style.color = "#fff";
        }, 2000);
    });
});

// Smooth Scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
