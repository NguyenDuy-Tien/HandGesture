const videoChoices = Array.from(document.getElementsByClassName("video-item"));
const videos = Array.from(document.getElementsByTagName("video"));

const loadVideos = () => {
    videoChoices.forEach(video_choice => {
        console.log(video_choice.id);
        video_choice.addEventListener('click', e => {
            for (let i = 0; i < 4; i++) {
                videos[i].src = `./video/${video_choice.id}/cam-${i+1}.mp4`;
            }
        })
    })
}

loadVideos();