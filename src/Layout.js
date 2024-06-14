import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header2';
import Footer from './components/footer';

const Layout = ({ children, headerComponent }) => (
  <>
    {headerComponent}
    {<Header />}
    {children}
    {<Footer /> || headerComponent }
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerComponent: PropTypes.node,
};

Layout.defaultProps = {
  headerComponent: null,
};

export default Layout;