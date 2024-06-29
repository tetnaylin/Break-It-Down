import React, { useState, useEffect } from 'react';
import PoseCameraComponent from './PoseComponentCamera';
import PoseVideoComponent from './PoseComponentVideo';
import { calculateDeviation } from './poseHelpers';
import './PoseComponent.css'
import { GameOverPage } from './../App';

function PoseComponent(videoPath) {
  // gradients 1 is for players
  const [gradients1, setGradients1] = useState([]);
  // gradients 2 is for reference footage
  const [gradients2, setGradients2] = useState([]);
  const [sumDeviation, setSumDeviation] = useState(0);
  const [isOver, setIsOver] = useState(false);

  // get gradients data back from child
  const handleGradients1 = (gradients) => {
    setGradients1(gradients);
  }

  const handleGradients2 = (gradients) => {
    setGradients2(gradients);
  }

  const handleGameOver = (isGameOver) => {
    setIsOver(isGameOver);
  }

  // TODO: sum deviation not getting updated properly
  // when gradient1 (player's gradients) gets updated, calculate sumDeviation
  useEffect(() => {
    let deviation = calculateDeviation(gradients1, gradients2);
    setSumDeviation(current => current += deviation);
  }, [gradients1])

  useEffect(() => {
    console.log(isOver);
  }, [isOver])

  useEffect(() => {
    console.log('Test', sumDeviation);
  }, [sumDeviation])

  return (
    <div className="PoseComponent">
      {isOver ? (
        <GameOverPage deviation={sumDeviation}></GameOverPage>
      ) : (
        <>
          <h1>*INSERT SCORE HERE*</h1>
          <div className="video-inputs">
            <PoseVideoComponent videoPath={videoPath.videoPath} sendGradients={handleGradients2} sendOverState={handleGameOver}/>
            <PoseCameraComponent sendGradients={handleGradients1}/>
          </div>
        </>
      )
      }
    </div>
  );
}

export default PoseComponent;
