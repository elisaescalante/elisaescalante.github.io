function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}


var quotes = [
"At the end of the day, I am left wanting to unlearn what I have learned. I want to push out the new, that is now permanently tangled within my mind. I am left with new scars every day.",
"When you are forced to find peace in chaos and suffering, you will be chaotic even in peace. You can take the human out of the nightmare, but the nightmare is still in them.",
"No one is entitled to hear another person's truth, a person telling you their truth is always an unearned privilige.",
"Silence was crucial to save my fragile mind. And now, my words are meaningless and empty. They aren't really me, just rehearsed. my thoughts were cut off from the world. I didn't know how to speak them. I did what I must to survive. I adapted. But now, I can't go back.",
"And what is going to happen when it is all said and done, everything is gone, and you forgot yourself?",
"I am fighting, every day, just to get myself back. Not even to succeed or thrive, just to live. We are strongest when we seem weak. People will see &ldquo;helpless.&ldquo; What they won't see is the millions of battles you are fighting within yourself, just to be okay.
"Being forced, controlled, and coerced is a lifestyle that humans are very much capable of adapting to. They can sustain life in chaos and, upon absence of it, find themselves lost."                               
]


];

var randomNum = randomRange(0, quotes.length-1);

var randomNum2 = randomRange(0, quotes.length-1);

$(document).ready(function() {
      $("button").css("color", "white");
      $("#text").html('<strong>"' + quotes[randomNum] + '"</strong>');
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[randomNum];
  
});


document.getElementById("text").addEventListener("click", click2);


function click2() {
  var randomNum = randomRange(0, quotes.length-1);;
  
  if(randomNum==0){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[1] + '"</strong>';
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[1];
  }
 if(randomNum==1){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[2] + '"</strong>';
    document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[2];
}
   if(randomNum==2){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[3] + '"</strong>';
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[4];
}
 if(randomNum==3){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[4] + '"</strong>';
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[4];
}
   if(randomNum==4){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[5] + '"</strong>';
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[4];
}
    if(randomNum==5){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[6] + '"</strong>';
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[4];
}
   if(randomNum==6){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[0] + '"</strong>';
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[0];
}
    if(randomNum>6){
  document.getElementById("text").innerHTML = '<strong>"' + quotes[randomNum] + '"</strong>';
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?text=' + quotes[randomNum];
}
}

 




