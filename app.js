const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const moblie_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
     moblie_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "black";   
    } else{
        header.style.backgroundColor = "transparent";   
    }
})

menu_itemforEach((item) =>{
    item.addEventListener('click',()=>{
    item.classList.toggle('active');
     moblie_menu.classList.toggle('active');
});
})