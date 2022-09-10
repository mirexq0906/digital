document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.accordion-item-title').forEach(function(itemPlus) {
        itemPlus.addEventListener('click', function(plusClick) {
            const path = plusClick.currentTarget.dataset.path
            const nameClass = plusClick.currentTarget.className
            const activeBlock = document.querySelector(`[data-target="${path}"]`)
            if ( nameClass === 'accordion-item-title accordion-item-title-active') {
                document.querySelectorAll('.accordion-item-description').forEach(function(active) {
                    active.classList.remove('accordion-item-description-active')
                    active.style.height = 0 + 'px'
                })
                itemPlus.classList.remove('accordion-item-title-active')
            } 
            else {
                document.querySelectorAll('.accordion-item-description').forEach(function(active) {
                    active.classList.remove('accordion-item-description-active')
                    active.style.height = 0 + 'px'
                })
                document.querySelectorAll('.accordion-item-title').forEach(function(deleteActive) {
                    deleteActive.classList.remove('accordion-item-title-active')
                }) 
                itemPlus.classList.add('accordion-item-title-active')
                activeBlock.style.height = activeBlock.scrollHeight + 'px'
                activeBlock.classList.add('accordion-item-description-active') 
            }  
        })  
    })
})