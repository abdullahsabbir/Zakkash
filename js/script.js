$(function()
{
    
    "use strict";
    
    var $window = $(window);
    var $document = $(document);
    
    //Preloader
    
    $window.on('load', function()
    {
        $('.preloader').delay(1000).fadeOut(1000);
        
        bar1.LineProgressbar(
        {
           percentage: 0
        });

        bar2.LineProgressbar(
        {
           percentage: 0
        });

        bar3.LineProgressbar(
        {
           percentage: 0
        });

        bar4.LineProgressbar(
        {
           percentage: 0
        });
    });
    
    //Smooth Scroll
    
    var mainNavHeight = $('.custom_nav').height()+16;
    
    $document.on('click', 'a[href^="#"]:not([data-toggle])', function (event) {
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
        arrows: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '.banner_prev_arrow',
        nextArrow: '.banner_next_arrow',
        responsive:
        [
            {
                breakpoint: 576,
                settings:
                {
                    arrows: false
                }
            }
        ]
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
            },
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1,
                    arrows: false
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
                    arrows: true
                }
            },
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    });
    
    $('.blog_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
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
    
    $('.client_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive:
        [
            {
                breakpoint: 992,
                settings:
                {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings:
                {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings:
                {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    $window.on('scroll', function()
    {
        //Navbar Fix
        
        if($(this).scrollTop() > 0)
        {
            $('.custom_nav').css({'background': 'rgba(0,0,0,.8)'});
            $('.custom_nav').addClass('nav_arrow');
        }
        else
        {
              $('.custom_nav').css({'background': 'rgba(0,0,0,.5)'});
              $('.custom_nav').removeClass('nav_arrow');
        }
        
        //Back to Top Button Fix
        
        var scrollValue = $(this).scrollTop();
        
        if(scrollValue > 90)
        {
            $('.backToTop').fadeIn(1000);
        }
        else
        {
            $('.backToTop').fadeOut(1000);
        }
    });
    
    //Back to Top Button Click Event
    
    $(".backToTop").on('click', function()
    {
        $("html, body").animate({scrollTop : 0}, 1000);
    });
    
    //Counter Up
    
    $('.counter_span').counterUp();
    
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
    
    var bar1 = $('#skill_bar1');
    var bar2 = $('#skill_bar2');
    var bar3 = $('#skill_bar3');
    var bar4 = $('#skill_bar4');
    
    $('.skill_progress_parent').waypoint(function(direction)
    {
        if(direction == 'down')
        {
            bar1.LineProgressbar(
            {
               percentage: 85 
            });

            bar2.LineProgressbar(
            {
               percentage: 75 
            });

            bar3.LineProgressbar(
            {
               percentage: 55 
            });

            bar4.LineProgressbar(
            {
               percentage: 60
            });
        }
        
        this.destroy();
        
    }, {offset: '75%'});
    
    //Map API
    
    var googleMapSelector = $('#contact_map'),
            myCenter = new google.maps.LatLng(23.734337, 90.392739);

        function initialize() {
            var mapProp = {
                center: myCenter,
                zoom: 17,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("contact_map"), mapProp);
            var marker = new google.maps.Marker({
                position: myCenter,
                animation: google.maps.Animation.BOUNCE,
                icon: 'images/map_icon.png'
            });
            marker.setMap(map);
        }
        if (googleMapSelector.length) {
            google.maps.event.addDomListener(window, 'load', initialize);
        }
    
});