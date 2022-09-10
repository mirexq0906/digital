document.addEventListener('DOMContentLoaded', function(){
    let playButtons = document.querySelectorAll('#play-video')
    playButtons.forEach(function(playButton) {
        playButton.addEventListener('click', function(playClick) {
            const targetVideo = playClick.currentTarget.dataset.path;
            video = document.querySelector(`[data-target="${targetVideo}"]`)
            video.play();
            video.style.cursor = "pointer"
            playButton.classList.add('section-inspire__item-play-disabled');
            video.setAttribute("controls","controls")
        })
    }) 
})



