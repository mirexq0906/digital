document.addEventListener('DOMContentLoaded', function(){
    const anchorsHeader = document.querySelectorAll('.header__item-link')
    const anchorsFooter = document.querySelectorAll('.footer__item-link')
    const anchorsMobile = document.querySelectorAll('.header__link-mobile')
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
   
    for (let anchorMobile of anchorsMobile) {
        anchorMobile.addEventListener('click', function (e) {
        e.preventDefault()
        document.getElementById('menu-mobile').classList.remove('header__nav-mobile-active')
        const blockID = anchorMobile.getAttribute('href')
        setTimeout(() => 
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        , 300);
        
    })
    }    
    
})