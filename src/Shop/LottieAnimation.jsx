import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Lottiefield/Animation - 1704196514094.json'; // Replace with the correct path

function LottieAnimation() {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: '80px', height: '80px' }}

      />
    </div>
  );
}

export default LottieAnimation;
