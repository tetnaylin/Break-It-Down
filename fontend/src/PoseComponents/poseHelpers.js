// calculate the absolute devation between pose landmarks
export function calculateDeviation(gradients1, gradients2) {
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
  
  
export function getGradients(landmarks) {
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