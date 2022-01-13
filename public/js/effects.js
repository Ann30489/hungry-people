// Variables
let audio = $('.player')[0];
let wheel = $('.e-logo__svg');
let line = $('.e-line');
let circleSocial = $('.c-banner__social__item');
let header = $('.c-header');

// Wheel effects
wheel.on("click", function () {
    audio[audio.paused ? 'play' : 'pause']();
    line.addClass("shake-line");
    wheel.addClass("logo-rotate");

});


wheel.on("mouseover", function () {
    line.css('box-shadow', '5px 5px 35px 3px grey');


});




$(window).on("scroll", function () {
    line.css('box-shadow', 'none');
    line.removeClass("shake-line");
    wheel.removeClass("logo-rotate");
    header.css('background-color', 'white');
    header.addClass('header-shadow');
    $('.e-logo__svg').addClass('logo-scroll');
    $('.e-link').addClass('link-scroll');
    if ($(window).scrollTop() == 0) {
        header.css('background-color', 'transparent');
        header.removeClass('header-shadow');
        $('.e-logo__svg').removeClass('logo-scroll');
        $('.e-link').removeClass('link-scroll');
    }


});

// Social icons change color
circleSocial.first().on("mouseover", function () {
    $('#icon-fb-icon').css('fill', '#E8C300');
});

circleSocial.first().on("mouseout", function () {
    $('#icon-fb-icon').css('fill', 'white');
});

circleSocial.eq(1).on("mouseover", function () {
    $('#icon-twt-icon').css('fill', '#E8C300');
});

circleSocial.eq(1).on("mouseout", function () {
    $('#icon-twt-icon').css('fill', 'white');
});

circleSocial.eq(2).on("mouseover", function () {
    $('#icon-inst-icon').css('fill', '#E8C300');
});

circleSocial.eq(2).on("mouseout", function () {
    $('#icon-inst-icon').css('fill', 'white');
});