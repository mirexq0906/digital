document.addEventListener('DOMContentLoaded', function(){
    const anchorsMobile = document.querySelectorAll('.header__link-mobile')
    var scrollMobile = new SmoothScroll('.header__link-mobile', {
        speed: 500
    });
    var scrollTop = new SmoothScroll('.header__item-link', {
        speed: 300
    });

    var scrollBottom = new SmoothScroll('.footer__item-link', {
        speed: 300
    });

    anchorsMobile.forEach(link => {

        link.addEventListener('click', function(e) {
            document.getElementById('menu-mobile').classList.remove('header__nav-mobile-active')    
            setTimeout(() => 
                scrollMobile
            , 200);
        });
    });  
    
})