const videoElement = document.getElementById('video');

const button = document.getElementById('button');

//
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        console.error(error);
    }
}

button.addEventListener('click',async () =>{
    // disable button
    button.disabled = true;
    // start picture in picture

    await videoElement.requestPictureInPicture();

    button.disabled = false;
});
// On Load
selectMediaStream();