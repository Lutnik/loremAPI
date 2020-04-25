document.querySelector('#sub').textContent = 'TEST2';

const r = document.createElement('p');
r.textContent = ('Loading');
document.querySelector('body').appendChild(r);

const link = `${window.location.href}api/paragraphs/3/words/30`;
console.log(link);

fetch(link)
  .then((res) => res.json())
  .then((resp) => {
    r.textContent = resp.body.reduce((accu, next) => {
      accu += `${next} \n`;
      return accu;
    }, '');
  });
