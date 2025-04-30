var filmSwiper = new Swiper("#filmSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: false,
    watchOverflow: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var seriesSwiper = new Swiper("#seriesSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: false,
    watchOverflow: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});