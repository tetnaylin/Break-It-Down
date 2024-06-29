import React, { useState, useEffect } from 'react';
import PoseCameraComponent from './PoseComponentCamera';
import PoseVideoComponent from './PoseComponentVideo';
import { calculateDeviation } from './poseHelpers';
import './PoseComponent.css'

function PoseComponent(videoPath) {
  // gradients 1 is for players
  const [gradients1, setGradients1] = useState([]);
  // gradients 2 is for reference footage
  const [gradients2, setGradients2] = useState([]);
  const [sumDeviation, setSumDeviation] = useState(0);


  // get gradients data back from child
  const handleGradients1 = (gradients) => {
    setGradients1(gradients);
  }

  const handleGradients2 = (gradients) => {
    setGradients2(gradients);
  }

  // TODO: sum deviation not getting updated properly
  // when gradient1 (player's gradients) gets updated, calculate sumDeviation
  useEffect(() => {
    setSumDeviation(current => current += calculateDeviation(gradients1, gradients2));
  }, [gradients1])

  useEffect(() => {
    console.log('Test', sumDeviation);
  }, [sumDeviation])

  return (
    <div className="App">
      <h1>*INSERT SCORE HERE*</h1>
      <div className="video-inputs">
        <PoseVideoComponent videoPath={videoPath.videoPath} sendGradients={handleGradients2}/>
        <PoseCameraComponent sendGradients={handleGradients1}/>
      </div>
      {/* <div>
        <input type="file" accept="video/*" onChange={handleVideoFileChange} />
      </div> */}
    </div>
  );
}

export default PoseComponent;
