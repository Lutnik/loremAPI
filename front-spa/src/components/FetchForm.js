import React, { useEffect, useState } from 'react';

const FetchForm = () => {
  const [contents, setContents] = useState();
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const url = process.env.NODE_ENV === 'development'
        ? `https://guarded-chamber-22750.herokuapp.com/api/paragraphs/${query.paragraphs}/words/${query.words}`
        : `${window.location.href}paragraphs/${query.paragraphs}/words/${query.words}`;
      fetch(url)
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error('Network issues, please retry');
        })
        .then((resp) => {
          console.log(resp);
          setContents(resp);
          setIsLoading(false);
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
      <form onSubmit={formHandler}>
        <label htmlFor="paragraphs">
          Paragrafy:
          <input type="text" id="paragraphs" />
        </label>
        <label htmlFor="words">
          Słowa:
          <input type="text" id="words" />
        </label>
        <button type="submit"> Poproszę </button>
      </form>
      { isLoading
        ? (
          <p> Wczytuję </p>
        )
        : (
          contents
            ? (
              <section>
                <p>{ contents.status }</p>
                { contents.body.map((w, i) => (<p key={i}>{ w }</p>)) }
              </section>
            )
            : (
              <p> Tu będzie gadało </p>
            )
        )}
    </section>
  );
};

export default FetchForm;
