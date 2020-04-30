import React, { useEffect, useState } from 'react';
import Form from './Form';
import Results from './Results';

const FetchForm = () => {
  const [contents, setContents] = useState();
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const url = `https://lorem-silesium.herokuapp.com/api/paragraphs/${query.paragraphs}/words/${query.words}`;
      fetch(url)
        .then((data) => {
          if (data.ok) return data.json();
          throw new Error('Network issues, please retry');
        })
        .then((resp) => {
          setIsLoading(false);
          setContents(resp);
        })
        .catch((err) => {
          setIsLoading(false);
          setContents({
            status: 444,
            word: `An error has occured: ${err.message}`,
          });
        });
    }
  }, [query]);

  const formHandler = (e) => {
    e.preventDefault();
    setQuery({
      paragraphs: e.target[0].value,
      words: e.target[1].value,
    });
  };

  return (
    <section>
      <Form formHandler={formHandler} />
      <Results isLoading={isLoading} contents={contents} />
    </section>
  );
};

export default FetchForm;
