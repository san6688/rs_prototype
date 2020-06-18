import React from 'react';
import { FaTools, FaSmileBeam, FaUserTie } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import AnimatedHeader from './AnimatedHeader';

const Statistics = (props) => (
  <div style={{
    margin: '0 auto', width: '70vw', minHeight: 300, padding: 15,
  }}
  >
    <AnimatedHeader title="Our Facts" showDivider />
    <div style={{ margin: '0 auto', width: '40vw' }}>
      <div className="level">
        <div className="level-item has-text-centered">
          <Fade left>
            <div>
              <p className="heading">
                <span className="icon is-large">
                  <FaSmileBeam style={{ fontSize: 50, marginBottom: 15 }} />
                </span>
              </p>
              <p className="heading">Happy Customers</p>
              <p className="title">3,456</p>
            </div>
          </Fade>
        </div>
        <div className="level-item has-text-centered">
          <Fade>
            <div>
              <p className="heading">
                <span className="icon is-large">
                  <FaTools style={{ fontSize: 50, marginBottom: 15 }} />
                </span>
              </p>
              <p className="heading">Projects Completed</p>
              <p className="title">123</p>
            </div>
          </Fade>
        </div>
        <div className="level-item has-text-centered">
          <Fade right>
            <div>
              <p className="heading">
                <span className="icon is-large">
                  <FaUserTie style={{ fontSize: 50, marginBottom: 15 }} />
                </span>
              </p>
              <p className="heading">Top Clients</p>
              <p className="title">20</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>

  </div>
);

export default Statistics;
