$(function() {
    $(".hidden").delay(900).fadeIn(600);

    function endLoad () {
        $("#load img").delay(2000).fadeOut(600);
        $("#load").delay(4000).fadeOut(1000);        
    }

    endLoad();

    var containerwidth = window.innerWidth - 100;

    if (575 < window.innerWidth && window.innerWidth < 768) {
        $(".container").css("width", containerwidth);
    } else {
        $(".container").css("width", "");
    }
    
    window.onresize = function() {

        var containerwidth = window.innerWidth - 100;

        if (575 < window.innerWidth && window.innerWidth < 768) {
            $(".container").css("width", containerwidth);
        } else {
            $(".container").css("width", "");
        }
    }
    
    $(".hero-text-left").hover(    
        function() {
            $(this).find("i").css({"margin-left": "20px"});
        },
        function() {
            $(this).find("i").css({"margin-left": "10px"});
        }
    );

    $(".hero-text-right").hover(
        function() {
            $(this).find("i").css({"margin-right": "20px"});
        },
        function() {
            $(this).find("i").css({"margin-right": "10px"});
        }
    );

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#mission",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#mission-bg", "mission-bg-fadein")    
        .addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: "#mission",
        reverse: true
    })
        .setClassToggle("#mission1", "fadein")    
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#mission",
        reverse: true
    })
        .setClassToggle("#mission2", "fadein")    
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#mission",
        reverse: true
    })
        .setClassToggle("#mission3", "fadein")    
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#aou",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#aou-subtitle", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#aou",
        triggerHook: 0.5,
        reverse: true
    })
        .setClassToggle(".aou-items", "aou-bg-fadein")
        .addTo(controller);
    
    new ScrollMagic.Scene({
        triggerElement: "#aou1",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#aou1", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#aou2",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#aou2", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#aou3",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#aou3", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#aou4",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#aou4", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".aou-bottom",
        triggerHook: 0.8,
        reverse: true
    })
        .setClassToggle(".aou-bottom", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#cycle-subtitle",
        triggerHook: 0.8,
        reverse: true
    })
        .setClassToggle("#cycle-subtitle", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".cycle-items",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle(".cycle-items", "cycle-bg-fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#cycle1",
        triggerHook: 0.6,
        reverse: true
    })
        .setClassToggle("#cycle1", "fadein")
        .addTo(controller);
        
    new ScrollMagic.Scene({
        triggerElement: "#cycle2",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#cycle2", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#cycle3",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#cycle3", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#cycle-donation",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#cycle-donation", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#cycle-img",
        triggerHook: 0.8,
        reverse: true
    })
        .setClassToggle("#cycle-img", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#blog1",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#blog1", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#blog2",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#blog2", "fadein")
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#blog3",
        triggerHook: 0.7,
        reverse: true
    })
        .setClassToggle("#blog3", "fadein")
        .addTo(controller);

})
