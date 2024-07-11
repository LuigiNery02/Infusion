(function(){
    var $body = document.querySelector("body");
    $body.classList.remove("no-js");
    $body.classList.add("js");

    var menu = new Menu({
        container: '.header_nav',
        toogleBtn: '.header_btnMenu',
        widthEnabled: 1025
    })

    var carouselImgs = new Carousel({
        container: '.laptop-slider .slideshow', 
        itens: 'figure', 
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselQuotes = new Carousel({
        container: '.quote-slideshow', 
        itens: 'figure', 
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()