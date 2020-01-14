let showHideHamburger = () => {
    $(".hamburger").on("click", function() {
        $(".stick").eq(0).toggleClass("one");
        $(".stick").eq(1).toggleClass("two");
        $(".stick").eq(2).toggleClass("three");
        $('.r-menu').slideToggle();
        if($('body').css("overflow-y") == "auto") {
            $('body').css("overflow-y", "hidden");  
            $('html').css("overflow-y", "hidden");  
        } else {
            $('body').css("overflow-y", "auto");
            $('html').css("overflow-y", "auto");
        }
    });
}


$(window).on("load", function() {
    $('.header-body.owl-carousel').owlCarousel({
        loop: true,
        stagePadding: 0,
        nav: false,
        dots: true, 
        autoWidth:false,
        singleItem: true,
        margin: 0,
        items: 1,
    });

    showHideHamburger();
});