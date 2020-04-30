import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Background from './Background';
import Header from './Header';
import Footer from './Footer';
import '../css/layout.css';
import mainStyle from '../css/mainStyle';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header title={data.site.siteMetadata.title} />
      <div>
        <Background />
        <main style={mainStyle.root}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
