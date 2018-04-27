$(function()
{
    "use strict";
    
    //Smooth Scroll
    
    var mainNavHeight = $('.custom_nav').height()+16;
    
    $(document).on('click', 'a[href^="#"]:not([data-toggle])', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - mainNavHeight
    }, 500);
    });
    
    //Slick Slider
    
    $('.banner_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '.banner_prev_arrow',
        nextArrow: '.banner_next_arrow'
    });
    
    $('.team_slide_parent').slick(
    {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: '.team_prev_arrow',
        nextArrow: '.team_next_arrow',
        centerPadding: '0px',
        asNavFor: '.team_text_slide_inner',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 3
                }
            }
        ]
    });
    
    $('.team_text_slide_inner').slick(
    {
        asNavFor: '.team_slide_parent',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    
    $('.feedback_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    
    $('.plans_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: false,
        prevArrow: '.plans_prev_arrow',
        nextArrow: '.plans_next_arrow',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 2,
                    arrow: true
                }
            },
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1,
                    arrow: true
                }
            }
        ]
    });
    
    $('.blog_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        prevArrow: '.blog_prev_arrow',
        nextArrow: '.blog_next_arrow',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    //Navbar Fix
    
    $(window).on('scroll', function()
    {
        if($(this).scrollTop() > 0)
        {
            $('.custom_nav').css({'background': '#353535'});
            $('.custom_nav').addClass('nav_arrow');
        }
        else
        {
              $('.custom_nav').css({'background': 'transparent'});
              $('.custom_nav').removeClass('nav_arrow');
        }
    });
    
    //Counter Up
    
    $('.about_counter_span').counterUp();
    
    //Fancybox
    
    $('[data-fancybox="gallery"]').fancybox();
    
    //Filterizr
    
    var filterizd = $('.filtr-container').filterizr();
    
    $('.work_filter_nav_buttons li').on('click', function()
    {
        $('.work_filter_nav_buttons li').removeClass('work_filter_nav_active');
        $(this).addClass('work_filter_nav_active');
    });
    
    //Progress Bar
    
    $('#skill_bar1').LineProgressbar(
    {
       percentage: 85 
    });
    
    $('#skill_bar2').LineProgressbar(
    {
       percentage: 75 
    });
    
    $('#skill_bar3').LineProgressbar(
    {
       percentage: 55 
    });
    
    $('#skill_bar4').LineProgressbar(
    {
       percentage: 60
    });
    
    
    
});