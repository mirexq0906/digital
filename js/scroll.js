document.addEventListener('DOMContentLoaded', function(){
    const anchorsHeader = document.querySelectorAll('.header__item-link')
    const anchorsFooter = document.querySelectorAll('.footer__item-link')
    const anchorsMobile = document.querySelectorAll('.header__link-mobile')
    // for (let anchorHeader of anchorsHeader) {
    //     anchorHeader.addEventListener('click', function (e) {
    //     e.preventDefault()
        
    //     const blockID = anchorHeader.getAttribute('href')
        
    //     document.querySelector(blockID).scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start'
    //     })
    // })
    // }

    anchorsHeader.forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    anchorsFooter.forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
    
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    anchorsMobile.forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('menu-mobile').classList.remove('header__nav-mobile-active')
            let href = this.getAttribute('href').substring(1);
    
            const scrollTarget = document.getElementById(href);
    
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            setTimeout(() => 
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                })
            , 150);
            
        });
    });

    // for (let anchorFooter of anchorsFooter) {
    //     anchorFooter.addEventListener('click', function (e) {
    //     e.preventDefault()
        
    //     const blockID = anchorFooter.getAttribute('href')
        
    //     document.querySelector(blockID).scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start'
    //     })
    // })
    // }
   
    // for (let anchorMobile of anchorsMobile) {
    //     anchorMobile.addEventListener('click', function (e) {
    //     e.preventDefault()
    //     document.getElementById('menu-mobile').classList.remove('header__nav-mobile-active')
    //     const blockID = anchorMobile.getAttribute('href')
    //     setTimeout(() => 
    //         document.querySelector(blockID).scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'start'
    //         })
    //     , 300);
        
    // })
    // }    
    
})