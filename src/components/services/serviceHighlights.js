import React from 'react';
import {
  FaPaintRoller, FaHeadset, FaSearchDollar, FaHandshake, FaRecycle, FaWallet,
} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import ServiceCard from './serviceCard';

const ServiceHighlights = (props) => (
  <div>
    <Fade left>
      <div className="columns">
        <div className="column">
          <ServiceCard
            title="Interior Expertise"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."
            icon={<FaPaintRoller style={{ fontSize: 70 }} />}
          />
        </div>
        <div className="column">
          <ServiceCard
            title="Free Consultation"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."
            icon={<FaHeadset style={{ fontSize: 70 }} />}
          />
        </div>
        <div className="column">
          <ServiceCard
            title="Free Quote"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."
            icon={<FaSearchDollar style={{ fontSize: 70 }} />}
          />
        </div>
      </div>
    </Fade>
    <Fade right>
      <div className="columns">
        <div className="column">
          <ServiceCard
            title="Expert's Advice"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."
            icon={<FaHandshake style={{ fontSize: 70 }} />}
          />
        </div>
        <div className="column">
          <ServiceCard
            title="Guaranteed Work"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."
            icon={<FaRecycle style={{ fontSize: 70 }} />}
          />
        </div>
        <div className="column">
          <ServiceCard
            title="Resonable Price"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."
            icon={<FaWallet style={{ fontSize: 70 }} />}
          />
        </div>
      </div>
    </Fade>
  </div>
);

export default ServiceHighlights;
