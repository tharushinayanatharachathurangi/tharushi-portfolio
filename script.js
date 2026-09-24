function toggleMenu() {
    const navigation = document.querySelector("nav");
    navigation.classList.toggle("active");
}


// Close mobile menu when a navigation link is clicked
document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector("nav").classList.remove("active");

    });

});


// Simple welcome message in the browser console
console.log("Welcome to Tharushi's Portfolio");
