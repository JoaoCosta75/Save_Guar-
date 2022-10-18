//Animação de revelação de seções da página
window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 80;

        if (revealTop < windowheight - revealpoint) {
            reveals[i].classList.add('active')
        } 
        else {
            reveals[i].classList.remove('active')
        }
    }
}

//Scroll suave ao clicar em alguma seção do menu DropDown

const menuItems = document.querySelectorAll('.dp-menu a')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault()
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop - 150
    
    window.scroll(0, to)
}



