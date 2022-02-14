
// ------------
// hamburger animation
const playHamburger   = document.getElementById('start-hamburger');

const burgerContainer = document.getElementById('hamburger-anim');
const burgerAnim      = bodymovin.loadAnimation({
    wrapper: burgerContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_b0iaodyg.json',

});

playHamburger.addEventListener('click', () =>{
    burgerContainer.classList.remove('hide');
    playHamburger.classList.add('hide');
    burgerAnim.goToAndPlay(0, true);
});

burgerAnim.addEventListener('complete', () =>{
    burgerContainer.classList.add('hide');
    playHamburger.classList.remove('hide');
});
// ------------


// ------------
// equalizer animation

// const playEqualizer   = document.getElementById('start-hamburger');

const equalizerContainer = document.getElementById('equalizer-anim');
const equalizerAnim      = bodymovin.loadAnimation({
    wrapper: equalizerContainer,
    animType: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets9.lottiefiles.com/packages/lf20_wc7uht2d.json',

});

// playEqualizer.addEventListener('click', () =>{
//     equalizerContainer.classList.remove('hide');
//     equalizerAnim.goToAndPlay(0, true);
// });


// ------------

// ------------
// slide animation

const buttonIn       = document.getElementById('slide-in-button');
const buttonOut      = document.getElementById('slide-out-button');
const slideScreenIn  = document.getElementById('main-menu-transition-in');
const slideScreenOut = document.getElementById('main-menu-transition-out');
const main           = document.getElementById('main');

// add transition animation and remove so you can repeat

    // slide-in
function transitionIn(){
    slideScreenIn.classList.add('slide-in');
    
    setTimeout(function(){
        slideScreenIn.classList.remove('slide-in');
    },1500);

    setTimeout(function(){
        main.style.display = 'none';
    },750);
}
    //---------

    // slide-out
function transitionOut(){
    slideScreenOut.classList.add('slide-out');

    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out')
    },1500);

    setTimeout(function(){
        main.style.display = 'initial';
    },750);

}
    //---------

buttonIn.addEventListener('click', transitionIn);
buttonOut.addEventListener('click', transitionOut);

// ------------


// ------------
// reveal animation

function reveal (){
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {

        
        let windowHeight = window.innerHeight;
        let revealTop    = reveals[i].getBoundingClientRect().top;
        let revealPoint  = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');

        }
        else{
            reveals[i].classList.remove('active');

        }
    }
}

    // listener
window.addEventListener('scroll', reveal);
// ------------


// ------------























