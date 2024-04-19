document.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('.photos-slider');

    sliders.forEach(function(slider) {
        $(slider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });
});
