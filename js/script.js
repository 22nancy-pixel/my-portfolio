// Create the "Scroll to Top" button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "Scroll to Top";  // Set the button text
document.body.appendChild(scrollToTopButton);  // Append button to the body

// Style the button
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "10px";
scrollToTopButton.style.right = "10px";
scrollToTopButton.style.padding = "10px 20px";
scrollToTopButton.style.backgroundColor = "#007BFF";
scrollToTopButton.style.color = "white";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.fontSize = "16px";
scrollToTopButton.style.display = "none";  // Initially hide the button

// Add an event listener to show the button when the user scrolls
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";  // Show the button after scrolling 200px
    } else {
        scrollToTopButton.style.display = "none";  // Hide the button if scroll position is above 200px
    }
});

// Add click event to scroll back to top smoothly
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to the top with smooth animation
});
