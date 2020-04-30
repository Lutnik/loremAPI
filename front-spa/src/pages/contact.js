import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => {
  const images = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "Octocat.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook: file(relativePath: { eq: "f_logo_RGB-Blue_100.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "LI-In-Bug.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Kontakt" />
      <h2>Kontakt</h2>
      <section style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <a href="https://github.com/Lutnik/loremAPI" target="new">
          <Img fixed={images.github.childImageSharp.fixed} alt="github icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100013913791271" target="new">
          <Img fixed={images.facebook.childImageSharp.fixed} alt="facebook icon" />
        </a>
        <a href="https://www.linkedin.com/in/hubert-mazurkiewicz-8ab3359b/" target="new">
          <Img fixed={images.linkedin.childImageSharp.fixed} alt="linkedin icon" />
        </a>
      </section>
    </Layout>
  );
};

export default Contact;
