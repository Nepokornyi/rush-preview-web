const videoLink = document.getElementById('video-link');
const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');
const clientsLink = document.getElementById('clients-link');
const contactLink = document.getElementById('footer-invisible');


function goToVideo(){
    slideScreenOut.classList.add('slide-out');

    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        videoLink.href = '#video';
        window.location.href = videoLink.href;
    },500);
}

function goToAbout(){


    slideScreenOut.classList.add('slide-out');
    
    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    //Prevent Loop
    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        aboutLink.href = '#about';
        window.location.href = aboutLink.href;
    },500);
}

function goToProjects(){
    slideScreenOut.classList.add('slide-out');
    
    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        projectsLink.href = '#projects';
        window.location.href = projectsLink.href;
    },500);
}

function goToClients(){
    slideScreenOut.classList.add('slide-out');
    
    setTimeout(function(){
        slideScreenOut.classList.remove('slide-out');
    },1000);

    setTimeout(function(){
        main.style.display = 'initial';
        mainMenu.classList.add('hide');
        clientsLink.href = '#clients';
        window.location.href = clientsLink.href;
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
