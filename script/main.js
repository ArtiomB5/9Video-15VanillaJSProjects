let playPauseButton = document.querySelector('.playPause');
playPauseButton.addEventListener('click', playPauseFunc);

function playPauseFunc(event) {
    let mainPageBgVideo = document.querySelector('.bgvideo');
    if (mainPageBgVideo.paused === false) {
        mainPageBgVideo.pause();
        event.currentTarget.innerHTML = '<span class="material-icons">play_arrow</span>';
    } else if (mainPageBgVideo.paused === true) {
        mainPageBgVideo.play();
        event.currentTarget.innerHTML = '<span class="material-icons">pause</span>';
    }
}