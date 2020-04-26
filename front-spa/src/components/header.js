import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "coalbg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header
      style={{
        backgroundImage: `url(${data.placeholderImage.childImageSharp.fluid.src})`,
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1rem 0',
        }}
      >
        <h1 style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/"> { siteTitle } </Link>
          <div>
            <Link to="/api"> API </Link>
            <Link to="/contact"> Kontakt </Link>
          </div>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
