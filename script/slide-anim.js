// ------------
// slide animation

let buttonIn = document.getElementById('slide-in-button');
let buttonOut = document.getElementById('slide-out-button');
let slideScreenIn = document.getElementById('main-menu-transition-in');
let slideScreenOut = document.getElementById('main-menu-transition-out');
let main = document.getElementById('main');

// add transition animation and remove so you can repeat

    // slide-in
function transitionIn(){
    slideScreenIn.classList.add('slide-in');
    
    setTimeout(function(){
        slideScreenIn.classList.remove('slide-in');
    },2000);

    setTimeout(function(){
        main.style.display = 'none';
    },1000);
}
    //---------

    // slide-out
function transitionOut(){
    slideScreenOut.classList.add('slide-out');

    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out')
    },2000);

    setTimeout(function(){
        main.style.display = 'initial';
    },1000);

}
    //---------

buttonIn.addEventListener('click', transitionIn);
buttonOut.addEventListener('click', transitionOut);

// ------------