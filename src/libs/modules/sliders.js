import Swiper from 'swiper/bundle'

const sliderCases = new Swiper('.cases__swiper', {
    effect: 'fade',
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    fadeEffect: {
        crossFade: true
    },
    autoHeight: true,
    navigation: {
        prevEl: '.cases__arrow--right',
    },
    on: {
        slideChange: function(e) {
            let curSlide = this.slides[this.activeIndex];
            let preSlide = this.slides[this.previousIndex]
            curSlide.classList.add('js-animation');
            preSlide.classList.remove('js-animation');
        }
    }

});

const additionalSlider = new Swiper('.additional-serv__swiper', {
    slidesPerView: 1,
    // spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: '.additional-serv__arrow--left',
        prevEl: '.additional-serv__arrow--right'
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 3,
            centeredSlides: true,
        }
    }

});



export {additionalSlider, sliderCases}