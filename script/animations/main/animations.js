
// ------------
// hamburger animation & HAMBURGER MAIN MENU TRANSITION
const mainMenu        = document.querySelector('.main-menu');

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

    // menu transition
        //transition in
        if(mainMenu.classList.length === 2){
            slideScreenIn.classList.add('slide-in');

            setTimeout(function(){
                slideScreenIn.classList.remove('slide-in');
            },1000);
        
            setTimeout(function(){
                main.style.display = 'none';
                mainMenu.classList.remove('hide');
            },500);
        }
        //transition out
        else if(mainMenu.classList.length === 1){

            slideScreenOut.classList.add('slide-out');

            setTimeout(function(){
                slideScreenOut.classList.remove('slide-out')
            },1000);

            setTimeout(function(){
                main.style.display = 'initial';
                mainMenu.classList.add('hide');
            },500);
        }

});

burgerAnim.addEventListener('complete', () =>{
    burgerContainer.classList.add('hide');
    playHamburger.classList.remove('hide');
});


document.addEventListener('click', ()=>{

})


// ------------


// ------------
// equalizer animation

// const playEqualizer   = document.getElementById('start-hamburger');

// const equalizerContainer = document.getElementById('equalizer-anim');
// const equalizerAnim      = bodymovin.loadAnimation({
//     wrapper: equalizerContainer,
//     animType: 'svg',
//     loop: true,
//     autoplay: false,
//     path: 'https://assets9.lottiefiles.com/packages/lf20_wc7uht2d.json',

// });

// equalizerContainer.addEventListener('click', () =>{
//     equalizerContainer.classList.remove('hide');
//     equalizerAnim.goToAndPlay(0, true);
// });


// ------------

// ------------
// PORTFOLIO CASES slide animation

const buttonIn       = document.getElementById('slide-in-button');
const buttonOut      = document.getElementById('slide-out-button');
const slideScreenIn  = document.getElementById('portfolio-menu-transition-in');
const slideScreenOut = document.getElementById('portfolio-menu-transition-out');
const main           = document.getElementById('main');

const portfolioContent = document.querySelector('.portfolio-menu');

// add transition animation and remove so you can repeat

    // slide-in
function transitionIn(){
    slideScreenIn.classList.add('slide-in');

    setTimeout(function(){
        slideScreenIn.classList.remove('slide-in');
    },1000);

    setTimeout(function(){
        main.style.display = 'none';
        portfolioContent.classList.remove('hide');
    },500);
}
    //---------

    // slide-out
function transitionOut(){
    slideScreenOut.classList.add('slide-out');

    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out')
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        portfolioContent.classList.add('hide');
    },500);

}
    //---------

buttonIn.addEventListener('click', transitionIn);
buttonOut.addEventListener('click', transitionOut);

// ------------


// ------------
// reveal animation
    //---------
    //Counter Anim start on reveal


function reveal (){
    const counterDiv = document.querySelectorAll('.counter-target');
    const reveals = document.querySelectorAll('.reveal');
    

    for (let i = 0; i < reveals.length; i++) {

        
        let windowHeight = window.innerHeight;
        let revealTop    = reveals[i].getBoundingClientRect().top;
        let revealPoint  = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
            for(count of counterDiv){
                count.classList.add('counter-start');
            }
        }
        else{
            reveals[i].classList.remove('active');
            for(count of counterDiv){
                count.classList.remove('counter-start');
            }
        }
    }
}

window.addEventListener('scroll', reveal);
// ------------


// ------------
// top bar scrolling effect
const scrollDiv = document.getElementById('fixed-scrolling');

document.addEventListener('scroll', () =>{
    let position   = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollVal  = Math.round(position * 100 / calcHeight);

    scrollDiv.style.width = scrollVal+'%';
});



// ------------


// ------------















