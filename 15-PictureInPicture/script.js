'use strict';

const video = document.getElementById('video');
const btn = document.getElementById('button');

const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    if (!mediaStream) throw new Error('Algo Salio Mal!!');

    video.srcObject = mediaStream;
    video.onloadedmetadata = () => video.play();
  } catch (err) {
    console.error(err.message);
  }
};

selectMediaStream();

btn.addEventListener('click', async () => {
  // Disable btn
  btn.disabled = true;

  await video.requestPictureInPicture();
  btn.disabled = false;
});
