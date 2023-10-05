const closeMenu = document.getElementById("closeMenu")
const openMenu = document.getElementById("openMenu")
closeMenu.addEventListener('click',()=>{
    const modalMobile = document.getElementById("modal-mobile")
    modalMobile.classList.add("hidden"); 
})
openMenu.addEventListener('click',()=>{
    const modalMobile = document.getElementById("modal-mobile")
    modalMobile.classList.remove("hidden"); 
})