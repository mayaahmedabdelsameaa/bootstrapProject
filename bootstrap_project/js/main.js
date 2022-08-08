$(function () {
    'use strict'
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
    });
    var options = {
        strings: ['<strong>I love</strong> <strong class="color">coding.</strong>', '<strong>And to </strong> <strong class="color">Share!!.</strong>'],
        typeSpeed: 40,
        loop: true
    };

    var typed = new Typed('.text', options);

    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top >= 60) {
            $(".navbar").addClass('secondary');
        } else {
            if ($(".navbar").hasClass('secondary')) {
                $(".navbar").removeClass('secondary');
            }
        }
    });
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartspeed: 300,
        loop: true,
        autoplayHovorPause: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
               
            },
            // breakpoint from 480 up
            480 : {
                items:2
               
            },
            // breakpoint from 768 up
            768 : {
                items:3
               
            }
        }
    
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('a').smoothScroll();
});