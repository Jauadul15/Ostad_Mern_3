// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Find all links with the class "nav-link"
    var navLinks = document.querySelectorAll(".nav-link");

    // Add a click event listener to each link
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the href attribute of the clicked link
            var href = this.getAttribute("href");

            // Use the href to navigate to the corresponding page
            window.location.href = href;
        });
    });
});
