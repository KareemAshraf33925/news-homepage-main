var iconmenu=document.querySelector(".icon-menu");
var items=document.querySelector(".items");
var iconmenuclose=document.querySelector(".icon-menu-close");
var over=document.querySelector(".over");
iconmenu.addEventListener("click",()=>{
    items.style.opacity="1";
    iconmenu.style.display="none";
    iconmenuclose.style.display="block";
    over.style.opacity="1";
})
iconmenuclose.addEventListener("click",()=>{
    items.style.opacity="0";
   iconmenuclose.style.display="none";
    iconmenu.style.display="block";
    over.style.opacity="0";
})