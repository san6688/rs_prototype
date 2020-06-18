import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';

const AnimatedImage = (props) => {
  const [hovered, setHovered] = useState(false);
  const { src, alt } = props;
  return (
    <div className="blurOnHover">
      <img
        src={src}
        alt={alt}
      />
      <div style={{
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        left: '40%',
        display: `${hovered ? 'block' : 'none'}`,
      }}
      >
        <Zoom bottom>
          <span className="title is-size-5 is-primary">{alt}</span>
        </Zoom>
      </div>
    </div>
  );
};

export default AnimatedImage;
