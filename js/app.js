const menu = document.querySelector(".menu");
const openmenubtn = document.querySelector(".open-menu");
const closemenubtn = document.querySelector(".close-menu");



function togglemenu() {
    menu.classList.toggle("menu_opened");

}
// le decimos que escuche el elememto click y que ejecute la funcion togglemenu
openmenubtn.addEventListener("click",togglemenu);
closemenubtn.addEventListener("click",togglemenu);