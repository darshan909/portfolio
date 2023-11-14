$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".type", {
        strings: ["Student", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    var typed = new Typed(".type2", {
        strings: ["Student", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });


    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});