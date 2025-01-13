// Create the "Scroll to Top" button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = "&#8593;";  // Unicode for an up-arrow symbol
document.body.appendChild(scrollToTopButton);

// Style the button
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "15px 20px";
scrollToTopButton.style.fontSize = "24px";
scrollToTopButton.style.backgroundColor = "#007BFF";
scrollToTopButton.style.color = "white";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "50%";  // Circular button
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
scrollToTopButton.style.transition = "all 0.3s ease-in-out";  // Smooth transitions
scrollToTopButton.style.opacity = "0";  // Start hidden (opacity 0)
scrollToTopButton.style.transform = "scale(0.7)";  // Start smaller for the bounce effect

// Add hover effects
scrollToTopButton.addEventListener('mouseover', () => {
    scrollToTopButton.style.backgroundColor = "#0056b3";  // Darker shade on hover
    scrollToTopButton.style.transform = "scale(1.1)";  // Slightly bigger on hover
    scrollToTopButton.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";  // Bigger shadow
});

scrollToTopButton.addEventListener('mouseout', () => {
    scrollToTopButton.style.backgroundColor = "#007BFF";  // Original color
    scrollToTopButton.style.transform = "scale(1)";  // Reset size
    scrollToTopButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";  // Reset shadow
});

// Add an event listener to show the button when the user scrolls
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.opacity = "1";  // Fade-in when scrolling down
        scrollToTopButton.style.transform = "scale(1)";  // Scale to normal size
    } else {
        scrollToTopButton.style.opacity = "0";  // Fade-out when at top
        scrollToTopButton.style.transform = "scale(0.7)";  // Shrink when at top
    }
});

// Add click event to scroll back to top smoothly
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
