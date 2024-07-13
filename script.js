document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#learn-more').scrollIntoView({
        behavior: 'smooth'
    });
});
function scrollToDiv() {
    document.getElementById('scrollTarget').scrollIntoView({ behavior: 'smooth' });
}

setInterval(function() {
    var h1 = document.getElementById('deals');
    var currentColor = h1.style.color;
    var newColor = (currentColor === 'red') ? 'blue' : 'red'; // Toggle between two colors

    h1.style.color = newColor;
}, 500); 