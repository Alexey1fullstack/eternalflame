$('.entry-list').owlCarousel({
       
    margin: 30,
    responsiveClass: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
        1600: {
            items: 3,
            nav: false,
        }
    },
     
});