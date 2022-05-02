// Phone Before-After Effect

const inputSlider   = document.getElementById('slider');
const pictureSlider = document.getElementById('secondPic')
inputSlider.addEventListener('input', (e) =>{
    const sliderPos = e.target.value;
    pictureSlider.style.width = sliderPos+'%';
});


// ------------
//Picture Bart-Case Carousel Effect
let firstCheckbox = document.getElementById('firstCheckbox');
let secondCheckbox = document.getElementById('secondCheckbox');
let thirdCheckbox = document.getElementById('thirdCheckbox');

let leftPicture = document.querySelector('.leftPicture');
let middlePicture = document.querySelector('.middlePicture');
let rightPicture = document.querySelector('.rightPicture');

let holder;



leftPicture.addEventListener('click', ()=>{
   firstCheckbox.checked = true;
   holder = leftPicture;

});

middlePicture.addEventListener('click', ()=>{
   secondCheckbox.checked = true;
});

rightPicture.addEventListener('click', ()=>{
   thirdCheckbox.checked = true;

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
   interval: 3000,
   speed: 2000,
   perMove: 1,
}).mount();
