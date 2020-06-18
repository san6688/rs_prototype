import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';
import MasonryGallery from '../components/masonry/MasonryGallery';

const PortfolioPage = (props) => (
  <Layout>
    <div style={{ margin: '0 auto', width: '80vw', minHeight: 600 }}>
      <MasonryGallery />
    </div>
  </Layout>
);

export default PortfolioPage;
