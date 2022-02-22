const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu =  document.querySelector('.openMenu');
const searchInput = document.querySelector('.search-input');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
searchInput.addEventListener('click',searchItem);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-130%';
}

function searchItem(){
    location.href = "/pages/Search/search.html";
}