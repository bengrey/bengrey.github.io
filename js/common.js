$(function() {

});
$('.owl-1').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    responsive: {
        0: {
            stagePadding: 0
        },
        1450: {
            stagePadding: 100
        },
        1550: {
            stagePadding: 150
        },
        1650: {
            stagePadding: 200
        },
        1800: {
            stagePadding: 275
        },
    }
});
$(document).ready(function(){
    $(".owl-1").owlCarousel();
});
$('.owl2').owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    autoplay: true,
});
$(document).ready(function(){
    $(".owl2").owlCarousel();
});
$('.owl3').owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    loop: true,
    autoplay: true,
    responsive: {
        320: {
            items:1,
        },
        992: {
            items: 2,
        }
    }
});
$(document).ready(function(){
    $(".owl3").owlCarousel();
});
$(window).on('scroll', function (e) {
    parallaxScroll();
});
$('#search').on('click', function () {
   $('.search-box').toggleClass('search-open');
   $('.search-box .close').on('click', function () {
       $('.search-box').removeClass('search-open')
   })
});
$(window).on('scroll load', function () {
    if ($(this).scrollTop() >= 100) {
        $('#upbutton').removeClass('hidden');
    } else {
        $('#upbutton').addClass('hidden');
    }
    if ($(this).scrollTop() >= 50) {
        $('.header-bottom').addClass('back');
    } else {
        $('.header-bottom').removeClass('back');
    }
});
$('.toggler').on('click', function () {
   $('.header-bottom').toggleClass('open');
});

$('#search').on('click', function() {
    $('.search-modal').toggleClass('open')
    $('.close').on('click', function() {
        $('.search-modal').removeClass('open')
    })
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('top',(0-(scrolled*1.3))+'px');
}

$('#upbutton').on('click', function () {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
$(window).on('resize', function () {
    if ( $(window).width() >= 768 ) {
        function setEqualHeight(columns) {
            var columns = columns
            var tallestcolumn = 0;
            columns.each( function() {
                currentHeight = $(this).height();
                if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } );
            columns.height(tallestcolumn);
        }
        $(document).ready(function() { setEqualHeight($(".screen4-posts .row div h3")); });
        $(document).ready(function() { setEqualHeight($(".sect1 .posts .post-box h3")); });
    } else if ($(window).width() < 768)  {
        function setEqualHeight(columns) {
            columns.css('height', 'auto');
        }
    };
});
// $(function () {
//     var location = window.location.href;
//     console.log(location);
//     var cur_url = '/' + location.split('/').pop();
//     console.log(cur_url);
//     $('.menu li').each(function () {
//         let link = $(this).find('a').attr('href');
//         if(cur_url == link) $(this).addClass('active');
//     });
// });
// $('.partner-btn2').on('click', function () {
//     $(this).preventDefault();
//    $('.partnership-list').toggleClass('open');
// });

$('.partner-btn2').on('click', function() {
        $('.partnership-list').slideToggle('slow');
    }
);

$(document).ready(function(){
    $(".learn-more, .menu-en-box ul li a").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-150;

        //анимируем переход на расстояние - top за 1000 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

var clicker = 0
$('.toggle_en').on('click', function () {
    clicker = ++clicker;
    if (clicker % 2 ==0) {
        $('.menu-en-wrapper').hide(600);
    } else {
        $('.menu-en-wrapper').show(600);
    }
});

var dropItem = $('.drop-item');
var dropToggle = $('.drop-item-toggle');
var dropCont = $('.drop-item-cont');

dropToggle.on('click', function() {
    $(this).closest(dropItem).siblings().find(dropToggle).removeClass('active').siblings(dropCont).slideUp();
    if ($(this).hasClass('active')) {
        $(this).removeClass('active').siblings(dropCont).slideUp();
    } else {
        $(this).addClass('active').siblings(dropCont).slideDown();
    }
});

