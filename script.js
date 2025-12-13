// Modal Logic
const modal = document.getElementById("auth-modal");
const card = document.getElementById("auth-card");
const closeModal = document.getElementById("close-modal");

const signinTab = document.getElementById("signin-tab");
const signupTab = document.getElementById("signup-tab");

const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");

// Open modal with animation
window.addEventListener("load", () => {
    modal.classList.remove("hidden");
    setTimeout(() => modal.classList.add("opacity-100"), 50); // fade in
    setTimeout(() => card.classList.add("scale-100"), 50); // scale up
});

// Close modal with reverse animation
closeModal.addEventListener("click", () => {
    modal.classList.remove("opacity-100");
    card.classList.remove("scale-100");
    setTimeout(() => modal.classList.add("hidden"), 300);
});

// Switch to Sign In
signinTab.addEventListener("click", () => {
    signinForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    signinTab.classList.add("text-indigo-600", "border-indigo-600");
    signupTab.classList.remove("text-indigo-600", "border-indigo-600");
    signupTab.classList.add("text-gray-400", "border-transparent");
});

// Switch to Sign Up
signupTab.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    signinForm.classList.add("hidden");

    signupTab.classList.add("text-indigo-600", "border-indigo-600");
    signinTab.classList.remove("text-indigo-600", "border-indigo-600");
    signinTab.classList.add("text-gray-400", "border-transparent");
});

// Typing effect
const texts = ["Resume Analyzer"];
let index = 0;
const typedText = document.getElementById('typed-text');

(function type() {
    const currentText = texts[0];
    typedText.textContent = currentText.slice(0, ++index);
    if(index < currentText.length){
        setTimeout(type, 80);
    }
})();
