$('.entry-list').owlCarousel({
       
    margin: 10,
    responsiveClass: true,
    nav: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true
        },
        1600: {
            items: 4,
            nav: true,
        }
    },
     
});