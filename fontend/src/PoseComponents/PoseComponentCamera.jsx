import React, { useEffect, useRef } from 'react';
import { Pose, POSE_CONNECTIONS } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { getGradients } from './poseHelpers';


const PoseCameraComponent = ({ sendGradients }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    pose.onResults(onResults);

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await pose.send({ image: videoRef.current });
      },
      width: 640, // Updated width
      height: 360  // Updated height
    });
    camera.start();

    function onResults(results) {
      const canvasCtx = canvasRef.current.getContext('2d');
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasCtx.drawImage(results.image, 0, 0, canvasRef.current.width, canvasRef.current.height);

      if (results.poseLandmarks) {
        // calculate gradients and send it back to parent component
        sendGradients(getGradients(results.poseLandmarks));

        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
          color: '#00FF00',
          lineWidth: 4
        });
        drawLandmarks(canvasCtx, results.poseLandmarks, {
          color: '#FF0000',
          lineWidth: 2
        });
      }
      canvasCtx.restore();
    }
  }, []);

  return (
    <div className="pose-container">
      <video ref={videoRef} style={{ display: 'none' }}></video>
      <canvas ref={canvasRef} width="640px" height="360px"></canvas>
    </div>
  );
};

export default PoseCameraComponent;
