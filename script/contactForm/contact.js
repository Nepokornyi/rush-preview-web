// contact form on click

const spanContact = document.querySelector('.contact-us-text');
const contactForm = document.querySelector('.contact-form');

contactForm.style.display = 'none';

spanContact.addEventListener('click',()=>{
    spanContact.style.display = 'none';
    contactForm.style.display = 'block';

});




// ------------