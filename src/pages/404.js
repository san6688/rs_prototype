import React from 'react';

import Layout from '../layouts/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>

    <div style={{
      margin: '0 auto', width: '100%', minHeight: '80vh', textAlign: 'center', paddingTop: 400,
    }}
    >
      <div className="content has-text-centered">
        <span className="title is-size-2 is-danger">Under Construction !!!</span>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
