// theme
const body = document.querySelector('body');
const navigation = document.querySelector('nav');
const for_theme = document.querySelector('.for-theme');
const theme_title = for_theme.firstElementChild;
const slider = theme_title.nextElementSibling;
const balls = theme_title.nextElementSibling.firstElementChild;
const display_name = document.querySelector('.name');

slider.addEventListener('click',function(){
    body.classList.toggle('bg-gray-200');
    theme_title.classList.toggle('text-neutral-900');
    balls.classList.toggle('ml-[56%]');
    display_name.classList.toggle('text-gray-800')

    light_mode_active = balls.getAttribute('class').includes('ml-[56%]');

    if(light_mode_active) {
        slider.classList.remove('bg-black');
        slider.classList.add('bg-neutral-400');
        balls.setAttribute('src', './img/light-mode.jpg');
    } else {
        slider.classList.add('bg-black');
        slider.classList.remove('bg-neutral-400');
        balls.setAttribute('src', './img/dark-mode.png');
    }
});

