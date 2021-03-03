
// Select the button
const btn = document.querySelector('.toggle-mode');
// Listen for a click on the button
btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');  
})