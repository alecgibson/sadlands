$(function() {
    $('.hamburger-button').click(toggleMenu);

    var $menu = $('.header-links.mobile-only');
    var $body = $('body');
    var $icon = $('.hamburger-button span');

    $menu.find('a').click(toggleMenu);

    function toggleMenu() {
        $menu.toggleClass('hidden');
        $body.toggleClass('disable-scroll');
        $icon.toggleClass('hamburger-icon');
        $icon.toggleClass('close');
    }
});