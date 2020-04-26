import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import FetchForm from '../components/FetchForm';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Tu będzie tytuł</h1>
    <p>A tu jakiś tekst</p>
    <p>Prawdopodobnie</p>
    <FetchForm />
  </Layout>
);

export default IndexPage;
