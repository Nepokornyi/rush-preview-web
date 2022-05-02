const loader          = document.querySelector('.loading-container');
const bodyMain        = document.querySelector('body');
const logoAnim        = document.querySelector('.loader');
const removeBlur      = document.querySelectorAll('.blur');


// Page on top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// chrome display none gif fix
let logoSRC = logoAnim.src;
logoAnim.src = logoAnim.src.replace(/\?.*$/,"")+"?x="+Math.random();
logoAnim.src = logoSRC;

let loadingTime = 0;

document.body.style.overflowY = 'hidden';

window.onload = function(){

    loadingTime = Math.floor(performance.now());
    if(loadingTime < 2000){
        setTimeout(() =>{
            stopLoading();
        }, 4000)
    }
    else{
        stopLoading();
    }
}

function stopLoading (){
    loader.style.opacity = '0';
    loader.style.display = 'none';
    bodyMain.style.overflowY = 'scroll';
    setTimeout(() =>{
        for(let i = 0; i < removeBlur.length; i++){
            removeBlur[i].classList.remove('blur');
        }
    },200);

}