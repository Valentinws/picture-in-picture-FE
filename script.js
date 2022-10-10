const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select medias tream, pass to video el, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log(err);
    }
}

buttonElement.addEventListener('click', async () => {
    // disable button
    buttonElement.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    buttonElement.disabled = false;
})

// on Load
selectMediaStream();