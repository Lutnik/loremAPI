import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Radium from 'radium';
import headerStyle from '../css/headerStyle';

const Header = ({ title }) => {
  const bg = useStaticQuery(graphql`
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

  const bgUrl = `url(${bg.placeholderImage.childImageSharp.fluid.src})`;

  return (
    <header style={{ ...headerStyle.root, backgroundImage: bgUrl }}>
      <h1 style={headerStyle.h1}>
        <span>
          <Link to="/" className="headerLink" style={headerStyle.a}>{ title }</Link>
        </span>
        <span>
          <Link to="/api" className="headerLink" style={headerStyle.a}>API</Link>
          <Link to="/contact" className="headerLink" style={headerStyle.a}>Kontakt</Link>
        </span>
      </h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Radium(Header);
