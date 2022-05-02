const splide = new Splide('.splide',{
    type:"loop",
    perPage: 4,
    arrows: true,
    pagination: false,
    autoplay: true,
    interval: 3000,
    speed: 2000,
    perMove: 1,
 }).mount();