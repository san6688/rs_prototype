import React from 'react';
import AnimatedImage from '../AnimatedImage';

const ProductHighlights = (props) => (
  <div style={{ marginTop: 30 }}>
    <div className="columns is-gapless" style={{ margin: 0 }}>
      <div className="column image-item image-item--quick-zoom">

        <figure className="image is-4by3">
          <AnimatedImage src="http://demo.archiwp.com/light-version/wp-content/uploads/sites/2/2015/07/p3_a.jpg" alt="Modular Kitchen" />
        </figure>

      </div>
      <div className="column image-item image-item--quick-zoom">

        <figure className="image is-4by3">
          <AnimatedImage src="http://demo.archiwp.com/light-version/wp-content/uploads/sites/2/2015/07/p3_a.jpg" alt="Wardrobes" />
        </figure>

      </div>
      <div className="column image-item image-item--quick-zoom">

        <figure className="image is-4by3">
          <AnimatedImage src="http://demo.archiwp.com/wp-content/uploads/2015/07/p3_b.jpg" alt="Living Room" />
        </figure>

      </div>
    </div>
    <div className="columns is-gapless" style={{ margin: 0 }}>
      <div className="column image-item image-item--quick-zoom">

        <figure className="image is-4by3">
          <AnimatedImage src="http://demo.archiwp.com/light-version/wp-content/uploads/sites/2/2015/07/p3_a.jpg" alt="Crokery" />
        </figure>

      </div>
      <div className="column image-item image-item--quick-zoom">

        <figure className="image is-4by3">
          <AnimatedImage src="http://demo.archiwp.com/wp-content/uploads/2015/07/p3_b.jpg" alt="Pooja Unit" />
        </figure>

      </div>
      <div className="column image-item image-item--quick-zoom">

        <figure className="image is-4by3">
          <AnimatedImage src="http://demo.archiwp.com/light-version/wp-content/uploads/sites/2/2015/07/p3_a.jpg" alt="Kids Room" />
        </figure>

      </div>
    </div>
  </div>
);

export default ProductHighlights;
