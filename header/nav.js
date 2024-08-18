//Javascript for animation effect when sliding for navigation bar
window.addEventListener('scroll', function() {
    //If the page is not at the top, function will work
    if (window.pageYOffset !== 0) {
        document.querySelector('nav').classList.add('black');
    } else {
        document.querySelector('nav').classList.remove('black');
    }
});