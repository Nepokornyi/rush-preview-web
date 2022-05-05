// Phone Before-After Effect

const inputSlider   = document.getElementById('slider');
const pictureSlider = document.getElementById('secondPic')
inputSlider.addEventListener('input', (e) =>{
    const sliderPos = e.target.value;
    pictureSlider.style.width = sliderPos+'%';
});


// ------------

// ------------
// Cases Carousel at the END
// Splide

const splide = new Splide('.splide',{
   type:"loop",
   perPage: 4,
   arrows: true,
   pagination: false,
   autoplay: true,
   interval: 2000,
   speed: 3000,
   perMove: 1,
}).mount();
