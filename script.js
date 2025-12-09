// mobile  side menu
const menu = document.getElementById("menu");
const close =document.getElementById("close")
const scrollMenu = document.getElementById("menu-slide")

menu.addEventListener("click", ()=>{
    scrollMenu.classList.add("menu-slide-in")
});

close.addEventListener("click", ()=>{
    scrollMenu.classList.remove("menu-slide-in")
});