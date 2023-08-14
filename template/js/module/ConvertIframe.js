export default function ConvertIframe() {
    const videos = document.querySelectorAll('.ourvalue-video');
    if (videos) {
        videos.forEach(item => {
            const videoBtn = item.querySelector('.video-btn')
            const videoMain = item.querySelector('.video-main')
            const videocontent = item.querySelector('.ourvalue-video-content')
            const videoinner = item.querySelector('.ourvalue-video-inner')
            videoBtn.addEventListener('click', () => {
                videoMain.play();
                $(videocontent).addClass('close')
                $(videoinner).addClass('close')
            })
        })
        
    }
}