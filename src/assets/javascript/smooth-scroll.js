$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                scrollTo(target, 1000);
                return false;
            }
        }
    });

    if (window.location.hash) {
        var target = $(window.location.hash);
        if (target.length) {
            scrollTo(target, 100);
        }
    }

    function scrollTo(target, duration) {
        $('html, body').animate({
            scrollTop: target.offset().top - 120
        }, duration);
    }
});
