const videoLink = document.getElementById('video-link');
const solutionLink = document.getElementById('solution-link');
const productLink = document.getElementById('product-link');
const resultLink = document.getElementById('result-link');
const contactLink = document.getElementById('footer-invisible');


function goToVideo(){
    slideScreenOut.classList.add('slide-out');

    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        videoLink.href = '#bart-video';
        window.location.href = videoLink.href;
    },500);
}

function goToSolution(){
    slideScreenOut.classList.add('slide-out');
    
    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    //Prevent Loop
    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        solutionLink.href = '#case-description';
        window.location.href = solutionLink.href;
    },500);
}

function goToProduct(){
    slideScreenOut.classList.add('slide-out');
    
    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        productLink.href = '#ready-product';
        window.location.href = productLink.href;
    },500);
}

function goToResult(){
    slideScreenOut.classList.add('slide-out');
    
    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        resultLink.href = '#case-conclusion';
        window.location.href = resultLink.href;
    },500);
}

function goToContact(){
    slideScreenOut.classList.add('slide-out');
    
    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        contactLink.href = '#footer-invisible';
        window.location.href = contactLink.href;
    },500);
}
