$(function () {
    $('.mob-pred').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
    $('.big-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 1200,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
    $('.ic-menu').click(function () {
        $('.in-menu').show();
    });
    $('.ic-hide').click(function () {
        $('.in-menu').hide();
    });
});

// hidden block

var button = document.querySelector('#btn-hidden');
var block = document.querySelector('#block-hidden');
button.onclick = function () {
    block.classList.toggle('hidden-box');
    // console.log(event);
    // if(!this.style.transform){
    //     this.style.transform = 'rotate(180deg)';
    // }
    // else {
    //     this.style.transform = '';
    // }

    if(this.innerText == "Подробно"){
        this.innerText = "Скрыть";
    }
    else{
        this.innerText = "Подробно";
    }

}