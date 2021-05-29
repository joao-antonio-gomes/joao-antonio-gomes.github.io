
$(document).ready(function () {
    $('.js-nav').click(function () {
        $(this).parent().find('.menu').toggleClass('active');
        $(this).find('i.fa').removeClass('fa-bars').addClass('fa-times');
    })
});

$('.container').animatedHeadline({
    animationType: "clip",
    animationDelay: 2500,
    barAnimationDelay: 3800,
    barWaiting: 800,
    lettersDelay: 50,
    typeLettersDelay: 150,
    selectionDuration: 500,
    typeAnimationDelay: 1300,
    revealDuration: 600,
    revealAnimationDelay: 1500
});

$('.container').animatedHeadline();

particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
