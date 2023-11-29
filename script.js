const button = document.querySelector('button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('activated');
});

const menuButtons = document.querySelectorAll('.menu__button');

const menuButtonsArray = Array.from(menuButtons);

menuButtonsArray.forEach(button => {

    button.addEventListener('click', () => {

       closeAnotherButtons(button);       
       button.classList.toggle('activated');       
              
    });
}); 

function closeAnotherButtons(activeButton) {

    menuButtonsArray.forEach(button => {
        
        if(button != activeButton) {        
            if(button.classList.contains('activated')) {
                button.classList.remove('activated');           
            } 
        }

    });
} 