import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { FaCircle } from 'react-icons/fa';

const AnimatedHeader = (props) => {
  const { title, showDivider } = props;
  return (
    <div>
      <Zoom>
        <div className="content has-text-centered">
          <span className="title is-size-4 is-primary">{title}</span>
        </div>
      </Zoom>
      {
        showDivider && (
          <Fade bottom>
            <div className="content has-text-centered" style={{ width: '70%', margin: 'auto' }}>
              <div className="divider is-primary">
                <span className="icon" style={{ fontSize: '0.4rem' }}>
                  <FaCircle />
                </span>
              </div>
            </div>
          </Fade>
        )
      }
    </div>
  );
};

export default AnimatedHeader;
