/*===== Mob-Menu =====*/
const menu=document.querySelector('.mob-menu');
const overlay2=document.querySelector('.overlay-2');
const btnCloseMenu=document.querySelector('.close-menu');
const btnOpenMenu=document.querySelector('.menu-mob');

const openMenu=function(){
    menu.classList.remove('hid-2');
    overlay2.classList.remove('hid-2');
}

const closeMenu=function(){
    menu.classList.add('hid-2');
    overlay2.classList.add('hid-2');
}

btnOpenMenu.addEventListener('click', openMenu)

btnCloseMenu.addEventListener('click' , closeMenu )
overlay2.addEventListener('click' , closeMenu );
/* Validate if constant exists */