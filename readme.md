# loremAPI <img src="https://heroku-badges.herokuapp.com/?app=lorem-silesium">

## Lorem Silesium - make your website speak silesian!

There was no silesian language lorem ipsum generator and the web was a sad place.

Fortunately these days are now over and you can enjoy silesian language in all your content placeholders!
<hr>

> English-speaker disclaimer: The page is in Polish since I imagine this would be the primary audience.

<hr>

More on the silesian language itself: <a href="https://en.wikipedia.org/wiki/Silesian_language" target="new"> Here </a>

To get a feel of what is it like to speak silesian and why should you care:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=hrwLBeOcfms" target="_blank">
<img src="http://img.youtube.com/vi/hrwLBeOcfms/0.jpg"
alt="MODERN SILESIAN" width="240" height="180" border="10" /></a>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=osZ4KpUKPNo" target="_blank">
<img src="http://img.youtube.com/vi/osZ4KpUKPNo/0.jpg"
alt="CLASSIC SILESIAN" width="240" height="180" border="10" /></a>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=ZrSJ89ZgJFg" target="_blank">
<img src="http://img.youtube.com/vi/ZrSJ89ZgJFg/0.jpg"
alt="LEARN SILESIAN" width="240" height="180" border="10" /></a>


## What does the project do?
Well, it generates random strings of silesian words.

There are over 10 000 words in the database and each time a random set is fetched to the user.

The words are split into paragraphs and then randomly divided into sentences.

## I want it!
Simply go to the <a href="https://lorem-silesium.herokuapp.com/" target="new">project's homepage</a> and request some paragraphs.

## How about API?
Sure, just make a request to https://lorem-silesium.herokuapp.com/api/paragraphs/XXX/words/YYY

replacing XXX and YYY with the amount and lenght of content.

Make sure you do not ask for more than 10 paragraphs and 100 words at once :-)
<hr>
P.S. The app is hosted on <a href="www.heroku.com" target="new">Heroku</a> on a free plan dyno.

This means that it will hibernate and can take some time to respond. I'm sure you understand.

- Custom domain is planned for the future
