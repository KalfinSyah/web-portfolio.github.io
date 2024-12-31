// nav responsive
const nav = document.querySelector('nav');
const hamburger = nav.firstElementChild.firstElementChild;

hamburger.addEventListener('click', function(){
    nav.classList.toggle('max-md:overflow-visible');
    nav.classList.toggle('max-md:h-fit');

});

// theme
const body = document.querySelector('body');
const navigation = document.querySelector('nav');
const nav_option = document.querySelector('.nav-option');
const nav_option_childs = nav_option.children;
const nav_option_childs_array = [];
const for_theme = document.querySelector('.for-theme');
const theme_title = for_theme.firstElementChild;
const slider = theme_title.nextElementSibling;
const balls = theme_title.nextElementSibling.firstElementChild;
const display_name = document.querySelector('.name');

for(let i = 0; i < nav_option_childs.length; i++) {
    nav_option_childs_array.push(nav_option_childs[i]);
}

slider.addEventListener('click',function(){
    body.classList.toggle('bg-gray-200');
    nav_option_childs_array.forEach(element => {
        element.classList.toggle('text-gray-800');
    });
    theme_title.classList.toggle('text-neutral-900');
    balls.classList.toggle('ml-[56%]');
    display_name.classList.toggle('text-gray-800')

    light_mode_active = balls.getAttribute('class').includes('ml-[56%]');

    if(light_mode_active) {
        navigation.classList.add('bg-neutral-400');
        navigation.classList.remove('bg-neutral-800');
        slider.classList.remove('bg-black');
        slider.classList.add('bg-neutral-400');
        balls.setAttribute('src', './img/light-mode.jpg');
    } else {
        navigation.classList.remove('bg-neutral-400');
        navigation.classList.add('bg-neutral-800');
        slider.classList.add('bg-black');
        slider.classList.remove('bg-neutral-400');
        balls.setAttribute('src', './img/dark-mode.png');
    }
});

