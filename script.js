var bleep = new Audio();
bleep.src = 'https://www.myinstants.com/media/sounds/another-one_1.mp3';


$(document).ready(function(){
  newQuote();
});

var newQuote = function(){
  var index = Math.floor(Math.random() * quotes.length);
  
  $('span.quote').html('"' + quotes[index] + '"');
  
  $('a.twitter-share-button').attr('href', twitURI(quotes[index]));
};

                                  var quotes = [
"Excerpt 1",
"Excerpt 2",
"Excerpt 3",
"Excerpt 4",
"Excerpt 5",
"Excerpt 6",
"Excerpt 7",
"Excerpt 8",
"Excerpt 9",
"Excerpt 10"                                    
]
