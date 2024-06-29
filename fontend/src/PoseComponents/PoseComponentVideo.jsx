import React, { useEffect, useRef } from 'react';
import { Pose, POSE_CONNECTIONS } from '@mediapipe/pose';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { getGradients } from './poseHelpers';

const PoseVideoComponent = ({ videoPath, sendGradients, sendOverState }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('TEST', videoPath);
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

    const onFrame = async () => {
      if (videoRef.current && !videoRef.current.paused && !videoRef.current.ended) {
        await pose.send({ image: videoRef.current });
        requestAnimationFrame(onFrame);
      }
      else {
        sendOverState(true);
      }
    };

    videoRef.current.onloadeddata = () => {
      videoRef.current.play();
      onFrame();
    };

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
  }, [videoPath]);

  return (
    <div className="pose-container">
      <video ref={videoRef} src={videoPath} controls style={{ display: 'none' }}></video>
      <canvas className="maintain-aspect-ratio" ref={canvasRef} width="640px" height="360px"></canvas>
    </div>
  );
};

export default PoseVideoComponent;
