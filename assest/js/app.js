$('.slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 840,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }
    ]
});
$('.slick1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.btn-prev1',
    nextArrow: '.btn-next1',

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 840,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

        }
    }
    ]
});
$('.slick2').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'Linear',
    slidesToShow: 8,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            speed: 1000,
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    }
    ]

})
let AddBtn = document.querySelector(".add");
let SubBtn = document.querySelector(".sub");
let p = document.querySelector(".number");
AddBtn.addEventListener("click", function () { p.innerHTML = +p.innerHTML + 1; SaveBtn.classList.remove("btn-disabled"); })
SubBtn.addEventListener("click", function () { p.innerHTML = +p.innerHTML - 1; SaveBtn.classList.remove("btn-disabled"); })
let time = document.querySelector("time");

var countDownDate = new Date("may, 30, 2024 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + " : " + hours + " : "
        + minutes + "  : " + seconds + "  ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

