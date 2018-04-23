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
        fade: true,
        cssEase: 'linear',
        prevArrow: '.banner_prev_arrow',
        nextArrow: '.banner_next_arrow',
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