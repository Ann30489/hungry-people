// Scroll down
let scroll = $('.c-banner__scroll__circle');

scroll.click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $(document.body).height() }, 800);
});