// Page Load Animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Make body hidden first (Smooth Load)
document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s ease";


// Typing Effect in Search Box
const searchInput = document.querySelector(".hero input");

const text = "Search for restaurant, cuisine or a dish";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        searchInput.setAttribute(
            "placeholder",
            text.substring(0, index + 1)
        );
        index++;
        setTimeout(typingEffect, 50);
    }
}

typingEffect();


// Click Animation for Login & Signup
const buttons = document.querySelectorAll("header a");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        btn.style.transform = "scale(0.9)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 200);
    });
});


// Scroll Animation
const fadeElements = document.querySelectorAll(".animate-fade");

window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
