import React from 'react';
import ReactStars from 'react-stars';

interface StarsProps {
  stars: number;
  size?: number;
}

const Stars: React.FC<StarsProps> = ({ stars, size = 20 }) => {
  return (
    <ReactStars
      count={5}
      size={size}
      value={stars}
      color2={'#ffa500'}
      edit={false}
    />
  );
}

export default Stars;