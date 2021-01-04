$(document).ready(function(){
  newQuote();
});

var newQuote = function(){
  var index = Math.floor(Math.random() * quotes.length);
  
  $('span.quote').html('"' + quotes[index] + '"');
  
  $('a.twitter-share-button').attr('href', twitURI(quotes[index]));
};


var quotes = [
"At the end of the day, I am left wanting to unlearn what I have learned. I want to push out the new, that is now permanently tangled within my mind. I am left with new scars every day.",
"When you are forced to find peace in chaos and suffering, you will be chaotic even in peace. You can take the human out of the nightmare, but the nightmare is still in them.",
"No one is entitled to hear another person's truth, a person telling you their truth is always an unearned privilige.",
"Silence was crucial to save my fragile mind. And now, my words are meaningless and empty. They aren't really me, just rehearsed. my thoughts were cut off from the world. I didn't know how to speak them. I did what I must to survive. I adapted. But now, I can't go back.",
"And what is going to happen when it is all said and done, everything is gone, and you forgot yourself?",
"I am fighting, every day, just to get myself back. Not even to succeed or thrive, just to live. We are strongest when we seem weak. People will see &ldquo;helpless.&ldquo; What they won't see is the millions of battles you are fighting within yourself, just to be okay.",
"Being forced, controlled, and coerced is a lifestyle that humans are very much capable of adapting to. They can sustain life in chaos and, upon absence of it, find themselves lost."                               
]







 




