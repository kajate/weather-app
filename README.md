<b>Instructions</b>

Open the index.html file in a web browser or go directly to:

http://ebbmogardinger.com/coya/

(optimized for Chrome and iPhone)
<br><br>

<b>Impressions</b>

I started out by breaking it down, so that I had a couple of small steps along the way to complete.

First it looked like this(copypaste from my notes):

Make a var that takes the url and gets the last part of it

Take that var and put it into the fetch function to dynamically add a query to the database request based on the users input

Do a function that fetches from two different sources based on that input

If (no query) {

Display Berlin

Weather function

City function

}

Else {

Weather function

City function

}

Weather function:

Takes the query

Fetches the data

if (rain) 

 {show rain symbol

Else if (sun) {

Show sun symbol

}

Else if (cloudy) {

Show cloudy}

Else



Which, as you can see if you look at my code, changed during the process.

I found the challenge to be fun, with several new elements and problems I had not encountered before, such as using the svg, getting the url(which I have not yet manage to do, hence the search field substitute-solution).

I tried working with window.location to get the url, but it took to long time and it did not work on localhost for me, so instead I focused on getting all the data, design and info correct, as well as adding some parameters (weather description for example).

I also made the choice to change "Deg" to the celsius symbol, since I found it to be more clear and intutitive.

It is responsive and fetches the symbols based on the weather description, as well getting the weather and city info, in two different fetch functions, based on what the user types in the search field.

By default, it is set on Berlin.

I wanted to add the functionlaity to find weather based on your location, but it did not work as I wanted, and got tricky with the REST countries api, since it only has cities based on Capital. I made a function that took the country, based on the IP adress, and then a search query on the country code, in order to then display the Capital for that country code, however, it gave me an undefined response and I did not manage to work it out. I am not so used to working with api and data-call, so it is possible I am doing a beginner mistake when calling certaing parameteras in the Json.

Overall I liked the challenge! I started sunday afternoon and I was finished in the evening (after taking i break cooking delicious quesadillas). In total I would say I worked for about 5-6 hours with this (not counting the time I spent thinking about how to do it before starting to build it).

I hope you enjoy it!

/Patrick Gardinger


