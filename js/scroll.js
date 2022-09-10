document.addEventListener('DOMContentLoaded', function(){
    const anchorsHeader = document.querySelectorAll('.header__item-link')
    const anchorsFooter = document.querySelectorAll('.footer__item-link')
    for (let anchorHeader of anchorsHeader) {
        anchorHeader.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchorHeader.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }

    for (let anchorFooter of anchorsFooter) {
        anchorFooter.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchorFooter.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
    }
})