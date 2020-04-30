import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import footerStyle from '../css/footerStyle';

const Footer = () => {
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

  const imgUrl = `url(${bg.placeholderImage.childImageSharp.fluid.src})`;

  return (
    <footer style={{ ...footerStyle.root, backgroundImage: imgUrl }}>
      <span style={footerStyle.span}>
        {`© ${new Date().getFullYear()}, Built with `}
        <a href="https://www.gatsbyjs.org" style={footerStyle.a}>Gatsby</a>
      </span>
    </footer>
  );
};

export default Footer;
