burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navbar__itemsLogo = document.querySelector('.navbar__itemsLogo')
rightNav = document.querySelector('.rightNav')
navbar__itemsSearch = document.querySelector('.navbar__itemsSearch')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class');
    navbar__itemsLogo.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    navbar__itemsSearch.classList.toggle('v-class');

})

