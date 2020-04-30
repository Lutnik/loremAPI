import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const API = () => {
  const appUrl = 'https://lorem-silesium.herokuapp.com/';
  const codeStyle = {
    fontWeight: 600,
    background: 'rgba(255, 255, 255, 0.6)',
    padding: '0.2em 0.5em',
    borderRadius: '0.2em',
  };
  const spanStyle = {
    fontFamily: 'monospace',
    background: 'rgba(255, 255, 255, 0.6)',
    fontSize: 'large',
    display: 'inline-block',
    width: '5em',
  };

  return (
    <Layout>
      <SEO title="Detale API" />
      <h2 style={{ marginBottom: 0 }}>API</h2>
      <section>
        <p>
          Chcesz skorzystać z otwartego API? Nic prostszego!
          Pobieraj dane z poniższego adresu:
        </p>
        <code style={codeStyle}>
          {`${appUrl}api/paragraphs/XXX/words/YYY`}
        </code>
        <br />
        <span style={{ fontSize: 'small' }}>
          (XXX to liczba paragrafów (1 - 5),
          a YYY to liczba słów w każdym z nich (1 - 100))
        </span>
        <p>
          API wygeneruje za każdym razem losowy tekst z bazy danych ponad 10000 słów.
          <br />
          Odpowiedż będzie w formacie JSON.
          <br />
          <br />
          Przykład zapytania/odpowiedzi:
        </p>
        <code style={codeStyle}>
          fetch(
          {appUrl}
          /paragraphs/3/words/50)
          <br />
          &nbsp;&nbsp;.then(data =&gt; data.json())
          <br />
          &nbsp;&nbsp;.then(res =&gt; console.log(res))
        </code>
        <p> Dostarczy odpowiedź: </p>
        <code style={codeStyle}>  Object &#123; status, error, body[] &#125; </code>
        <p>
          <span style={spanStyle}>status</span>
          to 200, jeśli udało się pobrać dane, lub 4XX, jeśli wystąpił problem.
          <br />
          <span style={spanStyle}>error</span>
          zawiera treść błędu, jeśli wystąpił
          <br />
          <span style={spanStyle}>body</span>
          to tablica paragrafów (string).
        </p>
      </section>
      <p style={{ height: '50px' }}> </p>
    </Layout>
  );
};

export default API;
