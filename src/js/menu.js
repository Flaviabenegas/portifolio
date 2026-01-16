const menuButton = document.getElementById('menu-hamburger')
const linksMenu = document.querySelector('.links-menu')

menuButton.addEventListener('click', () => {

    if (linksMenu.style.display === 'flex') {
        linksMenu.style.display = 'none'
    } else {
        linksMenu.style.display = 'flex'
    }
})