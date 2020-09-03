import React, { useEffect, useState } from 'react';
import Form from './Form';
import Results from './Results';
import fetchAPI from '../lorem-api/fetchAPI';

const FetchForm = () => {
  const [contents, setContents] = useState();
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchAPI(query.paragraphs, query.words)
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
