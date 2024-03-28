import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
    <TypeAnimation
      sequence={['En', 1000, 'Arequipa', 1000]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  );
};

export default AnimatedText;
