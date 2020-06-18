import React from 'react';

import Helmet from '../components/helmet';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import Statistics from '../components/statistics';
import './styles.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <NavBar />

    {
      children
    }
    <Statistics />
    <Footer />
  </div>
);

export default Layout;
