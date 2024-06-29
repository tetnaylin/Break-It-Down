// reference screens
const videoElement = document.querySelector("#ref_video");
const canvasElement = document.querySelector("#ref_canvas");
const canvasCtx = canvasElement.getContext('2d');

// player screens
const videoElement2 = document.querySelector("#disp_video");
const canvasElement2 = document.querySelector("#disp_canvas");
const canvasCtx2 = canvasElement2.getContext('2d');

// video is faster than cam
let frameCounter1 = 0;
let videoStopped = false;
let frameCounter2 = 0;

let camGradients = [];
let refGradients = [];

let totalDeviation = 0;


// calculate the absolute devation between pose landmarks
function calculateScore(gradients1, gradients2) {
  let sumDeviation = 0;

  for(let i = 0; i < gradients1.length; i++) {
      const deviation = gradients1[i] - gradients2[i];
      sumDeviation += Math.abs(deviation);
  }

  return sumDeviation;
}


// TODO: return 0 or 1 if invalid
function gradientCalculator(landmark1, landmark2) {

  return (landmark2.y - landmark1.y) / (landmark2.x - landmark1.x)
}


function getGradients(landmarks) {
  const leftShoulder = landmarks[11];
  const leftElbow = landmarks[13];
  const leftWrist = landmarks[15];

  const righShoulder = landmarks[12];
  const rightElbow = landmarks[14];
  const rightWrist = landmarks[16];

  const leftHip = landmarks[23];
  const leftKnee = landmarks[24];

  const rightHip = landmarks[25];
  const rightKnee = landmarks[26];


  const leftUpperArmGradient = gradientCalculator(leftShoulder, leftElbow);
  const leftLowerArmGradient = gradientCalculator(leftElbow, leftWrist);
  const rightUpperArmGradient = gradientCalculator(righShoulder, rightElbow);
  const rightLowerArmGradient = gradientCalculator(rightElbow, rightWrist);
  const leftLegGradient = gradientCalculator(leftHip, leftKnee);
  const rightLegGradient = gradientCalculator(rightHip, rightKnee);

  return [leftUpperArmGradient, leftLowerArmGradient, rightUpperArmGradient, rightLowerArmGradient, leftLegGradient, rightLegGradient]
}

///////////////////////////////////////////////////////////////////////
const pose = new Pose({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
}});
pose.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  enableSegmentation: true,
  smoothSegmentation: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

function onResults(results) {
  if (!results.poseLandmarks) {
    return;
  }

  frameCounter1++;

  refGradients = getGradients(results.poseLandmarks);

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.segmentationMask, 0, 0,
                      canvasElement.width, canvasElement.height);

  // Only overwrite existing pixels.
  canvasCtx.globalCompositeOperation = 'source-in';
  canvasCtx.fillStyle = '#00FF00';
  canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);

  // Only overwrite missing pixels.
  canvasCtx.globalCompositeOperation = 'destination-atop';
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);

  canvasCtx.globalCompositeOperation = 'source-over';
  drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS,
                  {color: '#00FF00', lineWidth: 4});
  drawLandmarks(canvasCtx, results.poseLandmarks,
              {color: '#FF0000', lineWidth: 2});
  canvasCtx.restore();

}

pose.onResults(onResults);

async function onFrame() {
  if (!videoElement.paused && !videoElement.ended) {
    await pose.send({
      image: videoElement
    });
  // https://stackoverflow.com/questions/65144038/how-to-use-requestanimationframe-with-promise    
    await new Promise(requestAnimationFrame);
    onFrame();
  } else
    setTimeout(onFrame, 500);
}

// must be same domain otherwise it will taint the canvas! 
videoElement.src = "assets/IMG_2016.mp4"; 
videoElement.onloadeddata = (evt) => {
  let video = evt.target;

  canvasElement.width = video.videoWidth;
  canvasElement.height = video.videoHeight;

  videoElement.muted = true;
  videoElement.play();
  onFrame();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function onResultsCam(results) {
  if (!results.poseLandmarks) {
    return;
  }

  frameCounter2++;
  // console.log(frameCounter1, frameCounter2);

  // get gradient
  camGradients = getGradients(results.poseLandmarks);

  // calculate total deviation by player from user
  totalDeviation += calculateScore(camGradients, refGradients);
  console.log(totalDeviation);

  canvasCtx2.save();
  canvasCtx2.clearRect(0, 0, canvasElement2.width, canvasElement2.height);
  canvasCtx2.drawImage(results.segmentationMask, 0, 0,
                      canvasElement2.width, canvasElement2.height);

  // Only overwrite existing pixels.
  canvasCtx2.globalCompositeOperation = 'source-in';
  canvasCtx2.fillStyle = '#00FF00';
  canvasCtx2.fillRect(0, 0, canvasElement2.width, canvasElement2.height);

  // Only overwrite missing pixels.
  canvasCtx2.globalCompositeOperation = 'destination-atop';
  canvasCtx2.drawImage(
      results.image, 0, 0, canvasElement2.width, canvasElement2.height);

  canvasCtx2.globalCompositeOperation = 'source-over';
  drawConnectors(canvasCtx2, results.poseLandmarks, POSE_CONNECTIONS,
                  {color: '#00FF00', lineWidth: 4});
  drawLandmarks(canvasCtx2, results.poseLandmarks,
              {color: '#FF0000', lineWidth: 2});
  canvasCtx2.restore();
}

const poseCam = new Pose({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
}});

poseCam.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  enableSegmentation: true,
  smoothSegmentation: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

poseCam.onResults(onResultsCam);

const camera = new Camera(videoElement2, {
  onFrame: async () => {
    await poseCam.send({image: videoElement2});
  },
  width: 1280,
  height: 720
});
camera.start();