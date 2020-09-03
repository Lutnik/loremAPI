export default function fetchAPI(p, w) {
  const url = `https://lorem-slunskum.pl/api/paragraphs/${p}/words/${w}`;
  return fetch(url).then((data) => {
    if (data.ok) return data.json();
    throw new Error('Network issues, please retry');
  });
}
