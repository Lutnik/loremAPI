import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FetchForm from '../components/FetchForm';

const Index = () => (
  <Layout>
    <SEO title="Home" keywords={['lorem', 'ślunska', 'śląska', 'godko', 'gadka', 'api', 'generator']} />
    <h2>Lorem ipsum we ślůnskij godce</h2>
    <h4 style={{ marginBottom: '0.5em' }}>
      Czy zawsze marzyłeś o tym, aby Twój kontent był po śląsku?
      Od dzisiaj to możliwe!
    </h4>
    <p style={{ marginBottom: '0.5em' }}>
      &quot;Po co mi kolejny generator lorem?&quot;, zapytasz?
      <br />
      A ja odpowiem obejrzyj&nbsp;
      <a href="https://www.youtube.com/watch?v=hrwLBeOcfms" target="new">TO</a>
      &nbsp;albo&nbsp;
      <a href="https://www.youtube.com/watch?v=osZ4KpUKPNo" target="new">TO</a>
      &nbsp;i nie zadawaj więcej takich pytań...
    </p>
    <p> Wybierz, ile chcesz paragrafów oraz słów w każdym z nich: </p>
    <FetchForm />
  </Layout>
);

export default Index;
