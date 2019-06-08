/*
1. preloader
2. elements.Timeout
3. contact form
4. newsletter form
5. sliders
  5-1. owlCarousel HERO slider SLIDE
  5-2. owlCarousel slider FEATURED WORK
  5-3. owlCarousel slider SERVICES
  5-4. owlCarousel slider NEWS
  5-5. owlCarousel slider NEWS IMG
  5-6. owlCarousel slider HOME, owlCarousel slider TESTIMONIALS
  5-7. owlCarousel HERO slider SPLIT
  5-8. owlCarousel HERO slider ZOOM
6. signup form
  6-1. signup form additional CLOSER
7. search form
  7-1. search form additional CLOSER
8. facts counter
9. page backgrounds
10. height.Adjustment
11. main navigation, nav secondary experience
12. YTPlayer
13. item photos
14. hidden container Google Maps
  14-1. hidden container Google Maps additional CLOSER
15. lightBox
16. item page
17. mobile navigation
18. the Wall
19. GOOGLE ANALYTICS [for demonstration purposes only]
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(1400);
        $("#preloader-status").delay(300).fadeOut("slow");
		
        // 2. elements.Timeout
        setTimeout(function() {
            $(".animated-text, .titleOT, #home-navigation, .top-shadow, .full-width-wrapper, .fotorama__caption").delay(1000).css({
                display: "none"
            }).fadeIn(1000);
        }, 0);
    });
	
    // 3. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 4. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // 5. sliders
    // 5-1. owlCarousel HERO slider SLIDE
    $(".hero-slider-slide").owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: ["<img src='img/hero-slider-arrow-left.png'>", "<img src='img/hero-slider-arrow-right.png'>"],
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        transitionStyle: false,
        singleItem: true,
        items: 1,
        autoHeight: true,
        stopOnHover: false,
        addClassActive: true,
        beforeMove: function() {
            // slide BEFORE (hide captions) 
        },
        afterMove: function() {
            // slide AFTER (show captions)   
        }
    });
    // 5-2. owlCarousel slider FEATURED WORK
    $("#featured-work-carousel").owlCarousel({
        autoPlay: false,
        navigation: false,
        pagination: true,
        transitionStyle: false,
        singleItem: false,
        items: 3,
        itemsDesktopSmall: [1200, 2],
        itemsTablet: [740, 2],
        itemsMobile: [520, 1],
        autoHeight: false,
        stopOnHover: false
    });
    // 5-3. owlCarousel slider SERVICES
    $(".services-owl").owlCarousel({
        autoPlay: false,
        navigation: true,
        pagination: true,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: false,
        stopOnHover: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    // 5-4. owlCarousel slider NEWS
    $(".news-carousel-owl").owlCarousel({
        autoPlay: false,
        navigation: false,
        pagination: true,
        transitionStyle: false,
        singleItem: true,
        items: 1,
        autoHeight: false,
        stopOnHover: false
    });
    // 5-5. owlCarousel slider NEWS IMG
    $("#news-img-carousel-1, #news-img-carousel-2").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: true,
        transitionStyle: "fade", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: false,
        stopOnHover: true
    });
    // 5-6. owlCarousel slider HOME, owlCarousel slider TESTIMONIALS
    $(".animated-text-slides, #testimonials-owl").owlCarousel({
        autoPlay: true,
        navigation: false,
        pagination: false,
        transitionStyle: "fade", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: false,
        stopOnHover: false
    });
    // 5-7. owlCarousel HERO slider SPLIT
    $(".hero-slider-split").owlCarousel({
		autoPlay: true,
        navigation: true,
        navigationText: ["<img src='img/hero-slider-arrow-left.png'>", "<img src='img/hero-slider-arrow-right.png'>"],
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        transitionStyle: false,
        singleItem: false,
        items: 2,
		itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsMobile: [680, 2],
        autoHeight: true,
        stopOnHover: false,
        addClassActive: true,
        beforeMove: function() {
            // slide BEFORE (hide captions) 
        },
        afterMove: function() {
            // slide AFTER (show captions)   
        }
    });
    // 5-8. owlCarousel HERO slider ZOOM
    $(".hero-slider-zoom").owlCarousel({
        autoPlay: true,
        navigation: true,
        navigationText: ["<img src='img/hero-slider-arrow-left.png'>", "<img src='img/hero-slider-arrow-right.png'>"],
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        transitionStyle: "fadeUp", // fade, backSlide, goDown, fadeUp
        singleItem: true,
        items: 1,
        autoHeight: true,
        stopOnHover: false,
        addClassActive: true,
        beforeMove: function() {
            // slide BEFORE (hide captions) 
        },
        afterMove: function() {
            // slide AFTER (show captions)   
        }
    });
	
    // 6. signup form
    $(".ex-modal-launcher, .ex-modal-closer").on("click", function() {
        if ($(".ex-modal").hasClass("open")) {
            $(".ex-modal").removeClass("open");
            $(".ex-modal").addClass("close");
        } else {
            $(".ex-modal").removeClass("close");
            $(".ex-modal").addClass("open");
        }
    });
    // 6-1. signup form additional CLOSER
    $(".main-navigation-logo, .navscroll, .logo-mobile, .mobile-nav li, .search-modal-launcher, .navigation-fire").on("click", function() {
        $(".ex-modal").removeClass("open");
        $(".ex-modal").addClass("close");
    });
	
    // 7. search form
    $(".search-modal-launcher").on("click", function() {
        if ($(".search-modal").hasClass("open")) {
            $(".search-modal").removeClass("open");
            $(".search-modal").addClass("close");
        } else {
            $(".search-modal").removeClass("close");
            $(".search-modal").addClass("open");
        }
    });
    // 7-1. search form additional CLOSER
    $(".main-navigation-logo, .navscroll, .logo-mobile, .mobile-nav li, .ex-modal-launcher, .navigation-fire").on("click", function() {
        $(".search-modal").removeClass("open");
        $(".search-modal").addClass("close");
    });
	
    // 8. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 9. page backgrounds
    var pageSection = $(".lower-page-facts");
    pageSection.each(function(indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
	
    // 10. height.Adjustment
    function heightAdjustment(heightSecondary, heightPrimary) {
        heightSecondary.height(heightPrimary.height());
        heightSecondary.css({
            "line-height": heightPrimary.height() + "px"
        });
    }
    heightAdjustment($(".main-inner-navigation > ul > li > a"), $(".main-navigation"));
	
    // 11. main navigation, nav secondary experience
    // main navigation
    if ($(".main-navigation").hasClass("transparent")) {
        $(".main-navigation").addClass("js-transparent");
    }
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 10) {
            $(".js-transparent").removeClass("transparent");
            $(".main-navigation, .main-navigation-logo .logo").addClass("reduce-height");
        } else {
            $(".js-transparent").addClass("transparent");
            $(".main-navigation, .main-navigation-logo .logo").removeClass("reduce-height");
        }
        // nav secondary experience 
        var scrollTop = $(window).scrollTop();
        navWorksWidth(scrollTop);
    });
	
    // 12. YTPlayer
    $("#background-video").YTPlayer({
        videoId: "r8j-MWq4HZc", // DEMO URL is: https://www.youtube.com/watch?v=r8j-MWq4HZc
        mute: true, // sound options: true, false
        pauseOnScroll: false,
        repeat: true,
        fitToBackground: true,
		playerVars: {
		    modestbranding: 0,
		    autoplay: 1,
		    controls: 0,
		    showinfo: 0,
		    wmode: "transparent",
		    branding: 0,
		    rel: 0,
		    autohide: 0
		}
    });
	
    // 13. item photos
    var urlPhotos = 'img/works/';
    $('.photo').each(function(key, value) {
        $(this).css('background-image', 'url(' + urlPhotos + $(this).data('photo-src') + ')').fadeIn("slow");
    });
	
    // 14. hidden container Google Maps
    $(".open-hidden-container").on("click", function() {
        if ($(".hidden-container, .hidden-container-left").hasClass("open")) {
            $(".hidden-container, .hidden-container-left").removeClass("open");
            $(".hidden-container, .hidden-container-left").addClass("close");
        } else {
            $(".hidden-container, .hidden-container-left").removeClass("close");
            $(".hidden-container, .hidden-container-left").addClass("open");
        }
    });
    // 14-1. hidden container Google Maps additional CLOSER
    $(".main-navigation-logo, .navscroll, .logo-mobile, .mobile-nav li, .search-modal-launcher, .ex-modal-launcher, .navigation-fire").on("click", function() {
        $(".hidden-container, .hidden-container-left").removeClass("open");
        $(".hidden-container, .hidden-container-left").addClass("close");
    });
	
    // 15. lightBox
    $(".photo .bt-nav").on("click", function() {
        var idSlider = $(this).data("slider-id");
        var mystr = $(this).data("slider-items");
        var myarr = mystr.split("|");
        var item = "";
        $(this).addClass("open");
        myarr.forEach(function(value) {
            item += '<li class="slider-item ' + idSlider + '" style="background-image:url(' + urlPhotos + value + ')"></li>';
        });
        $(".lightbox").html('\
            <div class="cycle-slideshow" data-cycle-slides=".' + idSlider + '" data-cycle-pager="#page-slide-' + idSlider + '" id="' + idSlider +
            '"> \n\
                <ul> \n\
                    ' + item + ' \n\
                </ul> \n\
                <div class="page-slide" id="page-slide-' + idSlider +
            '"></div> \n\
                <span class="bt-nav close close-lightbox"><em>Close</em></span> \n\
            </div> \
        ');
        if (myarr.length <= 1) $(".lightbox").hide();
        $(".lightbox").show();
        setTimeout(function() {
            $(".lightbox").addClass("open");
        }, 40);
    });
    $(document).on("click", ".close-lightbox", function() {
        $(".lightbox, .photo").removeClass("open");
        setTimeout(function() {
            $(".lightbox").hide().empty();
        }, 400);
    });
	
    // 16. item page
    function navWorksWidth(scrollTop) {
        if ($(window).width() > 900) {
            // item page 1
            if (scrollTop > ($("#item-page-1").offset().top + ($("#page-home").height() / 2)) && scrollTop < ($("#item-page-2").offset().top - 55)) {
                $("#menu-item-page-1").addClass("fixed");
            } else {
                $("#menu-item-page-1").removeClass("fixed").css("width", "50%");
            }
            // item page 2
            if (scrollTop > ($("#item-page-2").offset().top + ($("#page-home").height() / 2)) && scrollTop < ($("#page-services").offset().top - 55)) {
                $("#menu-item-page-2").addClass("fixed");
            } else {
                $("#menu-item-page-2").removeClass("fixed").css("width", "50%");
            }
        }
    }
	
    // 17. mobile navigation
    $(".navigation-fire").on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $("nav.mobile-nav").toggleClass("show");
    });
    $("nav.mobile-nav a").on("click", function(e) {
        e.preventDefault();
        var hash = $(this.hash);
        $("nav").removeClass("show");
        $(".navigation-fire").removeClass("open");
    });


});


// 18. the Wall
window.addEvent("domready", function() {
    var imagewall = [
        ["the-wall/1.jpg", [
            ["the-wall/1-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/2.jpg", [
            ["the-wall/2-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"]
        ]],
        ["the-wall/3.jpg", [
            ["the-wall/3-2.jpg", "Item Name<br \/>\r\nLife / Stories"]
        ]],
        ["the-wall/4.jpg", [
            ["the-wall/4-2.jpg", "Item Name<br \/>\r\nPeople / Portraits"]
        ]],
        ["the-wall/5.jpg", [
            ["the-wall/5-2.jpg", "Item Name<br \/>\r\nEditorials / Magazines"]
        ]],
        ["the-wall/6.jpg", [
            ["the-wall/6-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/7.jpg", [
            ["the-wall/7-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"]
        ]],
        ["the-wall/8.jpg", [
            ["the-wall/8-2.jpg", "Item Name<br \/>\r\nLife / Stories"]
        ]],
        ["the-wall/9.jpg", [
            ["the-wall/9-2.jpg", "Item Name<br \/>\r\nPeople / Portraits"]
        ]],
        ["the-wall/10.jpg", [
            ["the-wall/10-2.jpg", "Item Name<br \/>\r\nEditorials / Magazines"]
        ]],
        ["the-wall/11.jpg", [
            ["the-wall/11-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/12.jpg", [
            ["the-wall/12-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"]
        ]],
        ["the-wall/13.jpg", [
            ["the-wall/13-2.jpg", "Item Name<br \/>\r\nLife / Stories"],
            ["the-wall/13-3.jpg", "Item Name 2<br \/>\r\nLife / Stories"],
            ["the-wall/13-4.jpg", "Item Name 3<br \/>\r\nLife / Stories"]
        ]],
        ["the-wall/14.jpg", [
            ["the-wall/14-2.jpg", "Item Name<br \/>\r\nPeople / Portraits"]
        ]],
        ["the-wall/15.jpg", [
            ["the-wall/15-2.jpg", "Item Name<br \/>\r\nEditorials / Magazines"]
        ]],
        ["the-wall/16.jpg", [
            ["the-wall/16-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/17.jpg", [
            ["the-wall/17-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"]
        ]],
        ["the-wall/18.jpg", [
            ["the-wall/18-2.jpg", "Item Name<br \/>\r\nLife / Stories"]
        ]],
        ["the-wall/19.jpg", [
            ["the-wall/19-2.jpg", "Item Name<br \/>\r\nPeople / Portraits"]
        ]],
        ["the-wall/20.jpg", [
            ["the-wall/20-2.jpg", "Item Name<br \/>\r\nEditorials / Magazines"]
        ]],
        ["the-wall/21.jpg", [
            ["the-wall/21-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/22.jpg", [
            ["the-wall/22-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"]
        ]],
        ["the-wall/23.jpg", [
            ["the-wall/23-2.jpg", "Item Name<br \/>\r\nLife / Stories"]
        ]],
        ["the-wall/24.jpg", [
            ["the-wall/24-2.jpg", "Item Name<br \/>\r\nPeople / Portraits"]
        ]],
        ["the-wall/25.jpg", [
            ["the-wall/25-2.jpg", "Item Name<br \/>\r\nEditorials / Magazines"]
        ]],
        ["the-wall/26.jpg", [
            ["the-wall/26-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/27.jpg", [
            ["the-wall/27-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"]
        ]],
        ["the-wall/28.jpg", [
            ["the-wall/28-2.jpg", "Item Name<br \/>\r\nLife / Stories"]
        ]],
        ["the-wall/29.jpg", [
            ["the-wall/29-2.jpg", "Item Name<br \/>\r\nPeople / Portraits"]
        ]],
        ["the-wall/30.jpg", [
            ["the-wall/30-2.jpg", "Item Name<br \/>\r\nEditorials / Magazines"]
        ]],
        ["the-wall/31.jpg", [
            ["the-wall/31-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/32.jpg", [
            ["the-wall/32-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"]
        ]],
        ["the-wall/33.jpg", [
            ["the-wall/33-2.jpg", "Item Name<br \/>\r\nLife / Stories"]
        ]],
        ["the-wall/34.jpg", [
            ["the-wall/34-2.jpg", "Item Name<br \/>\r\nPeople / Portraits"]
        ]],
        ["the-wall/35.jpg", [
            ["the-wall/35-2.jpg", "Item Name<br \/>\r\nEditorials / Magazines"]
        ]],
        ["the-wall/36.jpg", [
            ["the-wall/36-2.jpg", "Item Name<br \/>\r\nCommercial / Stock"]
        ]],
        ["the-wall/plus-1.jpg", [
            ["the-wall/plus-1-2.jpg", "Item Name<br \/>\r\nBeauty / Fashion"] // an extra image to compensate for the gap
        ]]
    ];
    var maxLength = 36;
    var wallFluid = new Wall("wall", {
        "draggable": true,
		"slideshow": true, // options: true, false
        "speed": 1000,
        "showDuration": 4000,
        "transition": Fx.Transitions.Quad.easeOut,
        "inertia": true,
        "autoposition": true,
        "width": 301,
        "height": 320,
        "rangex": [-100, 100],
        "rangey": [-100, 100],
        callOnUpdate: function(items) {
            var root = Math.ceil(Math.sqrt(maxLength));
            document.id("wall").setStyle("margin-left", 0);
            var i = 0;
            (function() {
                try {
                    var position = ((Math.abs(items[i].y) % root) * root) + (Math.abs(items[i].x) % root);
                    if (position > maxLength) {
                        position = Math.floor(Math.random() * maxLength);
                    }
                    var file = imagewall[position][0];
                    var img = new Element("img[src=" + file + "]");
                    img.inject(items[i].node).fade("hide").fade("in");
                    var list = new Element("ul");
                    list.setProperty("class", "slideshow")
                    for (var j = 0; j < imagewall[position][1].length; j++) {
                        var slide = new Element("li");
                        new Element("img", {
                            src: imagewall[position][1][j][0]
                        }).inject(slide);
                        var desc = new Element("span", {
                            html: imagewall[position][1][j][1]
                        });
                        var div = new Element("div");
                        div.setProperty("class", "wall-item-description");
                        desc.inject(div);
                        div.inject(slide);
                        slide.inject(list);
                    }
                    list.inject(items[i].node);
                    var stop = false;
                    var firstSlide = true;
                    items[i].node.addEvents({
                        mouseenter: function(event) {
                            list.getChildren("li").setStyles({
                                "visibility": "hidden",
                                "opacity": 0
                            });
                            stop = false;
                            if (imagewall[position][1].length) {
                                (function(item) {
                                    item.fade("in");
                                    if (firstSlide) {
                                        delay = 1000;
                                        firstSlide = false;
                                    } else {
                                        delay = 2000;
                                    }
                                    if (item.getNext("li") != null) {
                                        var tmpslide = arguments.callee;
                                        (function() {
                                            item.fade("out");
                                            if (!stop) tmpslide(item.getNext("li"));
                                        }).delay(delay);
                                    } else if (item.getSiblings("li").length > 0) {
                                        var tmpslide = arguments.callee;
                                        (function() {
                                            item.fade("out");
                                            if (!stop) tmpslide(item.getSiblings("li").pop());
                                        }).delay(delay);
                                    }
                                })(new Element(list.getFirst("li")));
                                img.fade("out");
                            }
                            return false;
                        },
                        mouseleave: function() {
                            stop = true;
                            firstSlide = true;
                            if (imagewall[position][1].length) {
                                list.getChildren("li").fade("out");
                                img.fade("in");
                            }
                        }
                    });
                    i++;
                    if (i < items.length) {
                        var tmp = arguments.callee;
                        (function() {
                            tmp();
                        }).delay(10);
                    } else {}
                } catch (e) {}
            })();
        }
    });
    window.setTimeout(function() {
        wallFluid.initWall();
    }, 500);
});


// 19. GOOGLE ANALYTICS [for demonstration purposes only]
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-3033286-18', 'auto');
ga('send', 'pageview');