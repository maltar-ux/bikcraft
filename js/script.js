
if(window.SimpleSlide) {

    new SimpleSlide({
        slide: "quote", // nome do atributo data-slide="principal"
        time: 4000, // tempo de transição dos slides
    });
    new SimpleSlide({
        slide: "portfolio", // nome do atributo data-slide="principal"
        time: 6000, // tempo de transição dos slides
        nav: true
    });
}
if(window.SimpleAnime) {
    new SimpleAnime();
}
