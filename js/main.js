const menuButton = document.querySelector(".site-header__toggler");

const sitenav = document.querySelector(".sitenav")

menuButton.addEventListener("click", ()=> {
    if(sitenav.classList.contains("sitenav--open")) {
        sitenav.classList.remove("sitenav--open")
    } else {
        sitenav.classList.add("sitenav--open")
    }
})