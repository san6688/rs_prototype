import React from 'react';
import { Link } from 'gatsby';

import Fade from 'react-reveal/Fade';
import Layout from '../layouts/layout';
import Slider from '../components/slider/slider';
import AnimatedHeader from '../components/AnimatedHeader';
import ServiceHighlights from '../components/services/serviceHighlights';
import ProductHighlights from '../components/products/ProductHighlights';

const landingPageImages = [
  {
    src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
  },
  {
    src: 'https://drive.google.com/uc?id=1rJFs-8So16UCiDag__hG4yyf_RnC08Fa',
    text: 'Consectetur adipisicing elit cillum dolore eu fugiat nulla',
  },
  {
    src: 'https://drive.google.com/uc?id=1HO2AGjd_1yyYI4pYTTBmGXBaWHoGSqCl',
    text: 'Asperiores ex animi explicabo cillum dolore eu fugiat nulla',
  },
];

const IndexPage = () => (
  <Layout>
    <div style={{ margin: '0 auto', width: '100%', minHeight: '80vh' }}>
      <Slider images={landingPageImages} />
    </div>
    <div style={{
      margin: '30px auto', width: '70vw', minHeight: 400, padding: 20,
    }}
    >
      <AnimatedHeader title="Our Services" showDivider style={{ marginTop: 10 }} />
      <ServiceHighlights />
    </div>
    <div style={{
      margin: '0 auto', width: '70vw', minHeight: 600, padding: 20,
    }}
    >
      <AnimatedHeader title="Our Products" showDivider style={{ marginTop: 10 }} />
      <Fade bottom>
        <ProductHighlights />
      </Fade>
    </div>
  </Layout>
);

export default IndexPage;
