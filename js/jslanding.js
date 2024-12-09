document.querySelector('.button1').addEventListener('click', function(event) {
    event.preventDefault(); 

    const target = document.querySelector('#container-2');
    const offset = 50; 
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' 
    });
});