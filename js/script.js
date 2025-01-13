Let’s make your page interactive with JavaScript:
1. Open js/script.js and try this:
○ Add a “Scroll to Top” button that appears when the user scrolls down.
2. Link the script.js file in your HTML (<script src="js/script.js"></script>).
Here’s a sample to guide you:

5

const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "Scroll to Top";
document.body.appendChild(scrollToTopButton);
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "10px";
scrollToTopButton.style.right = "10px";
scrollToTopButton.style.display = "none";
window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
scrollToTopButton.style.display = "block";
} else {
scrollToTopButton.style.display = "none";
}
});
scrollToTopButton.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
