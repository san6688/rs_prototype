import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';

const AnimatedImage = (props) => {
  const { src, alt } = props;
  return (
    <div className="blurOnHover">
      <img
        src={src}
        alt={alt}
      />
      <div
        style={{
          position: 'absolute',
          textAlign: 'center',
          top: '50%',
          margin: '0 auto',
          width: '100%',
        }}
        className="textOverImage"
      >
        <Zoom bottom>
          <span className="title is-size-5 is-primary has-text-left">{alt}</span>
        </Zoom>
      </div>
    </div>
  );
};

export default AnimatedImage;
