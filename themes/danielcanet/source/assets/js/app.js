// @see: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
// 1. Toggle dark-theme click event behaviour.
// Select the button
const btn = document.querySelector('.toggle-mode');
// Listen for a click on the button
btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');  
})

// 2. Dark Mode at the Operating System Level.
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
}