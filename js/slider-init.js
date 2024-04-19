document.addEventListener('DOMContentLoaded', function () {
    var sliders = document.querySelectorAll('.photos-slider');
    sliders.forEach(function (slider) {
        new Swiper(slider, {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 'auto',
            centeredSlides: true,
            // Дополнительные настройки Swiper
        });
    });
});
