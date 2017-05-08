
var quotesArray = [
  'I love you the more in that I believe you had liked me for my own sake and for nothing else. ',
  'But man is not made for defeat. A man can be destroyed but not defeated. ',
  'When you reach the end of your rope, tie a knot in it and hang on. ',
  'There is nothing permanent except change. ',
  'It is better to be feared than loved, if you cannot be both. ',
  'Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. ',
  'Learning never exhausts the mind. ',
  'There is no charm equal to tenderness of heart. ',
  'All that we see or seem is but a dream within a dream. ',
  'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love. ',
  'The only journey is the one within. ',
  'Think in the morning. Act in the noon. Eat in the evening. Sleep in the night. ',
  'No act of kindness, no matter how small, is ever wasted. ',
  'The supreme art of war is to subdue the enemy without fighting. ',
  'Keep your face always toward the sunshine - and shadows will fall behind you. ',
  'Being entirely honest with oneself is a good exercise. ',
  'You can\'t blame gravity for falling in love. ',
  'There is only one corner of the universe you can be certain of improving, and that\'s your own self. ',
  'Coming together is a beginning; keeping together is progress; working together is success. ',
  'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. '
];

var authorArray = [
  'John Keats',
  'Ernest Hemingway',
  'Franklin D. Roosevelt',
  'Heraclitus',
  'Niccolo Machiavelli',
  'Henry James',
  'Leonardo da Vinci',
  'Jane Austen',
  'Edgar Allan Poe',
  'Francis of Assisi',
  'Rainer Maria Rilke',
  'William Blake',
  'Aesop',
  'Sun Tzu',
  'Walt Whitman',
  'Sigmund Freud',
  'Albert Einstein',
  'Aldous Huxley',
  'Henry Ford',
  'Samuel Beckett'
];

var colorArray =[
  "#1A237E",
  "#263238",
  "#1E88E5",
  "#b92b27",
  "#af0606",
  "#21759b",
  "#df2029",
  "#6A1B9A",
  "#ff5700",
  "#4E342E",
  "#0277BD"
];

var currentQuote = '';
var currentAuthor = '';

$(document).ready(function() {
  updateQuote() ;
  shareTweet() ;

  $(this).delay(1000).queue(function() {

    $("#new-quote").on("click", function() {
      newQuote() ;
    });

     $(this).dequeue();

  });

});

function updateQuote(){
  var randNum = Math.floor(Math.random() * quotesArray.length);
  currentQuote = quotesArray[randNum] ;
  currentAuthor = authorArray[randNum] ;
  document.getElementById('quote').innerHTML = '<span id="quotation">“ </span>'+currentQuote+'<br/><br/>- <span id="author">'+currentAuthor+'</span>' ;
}

function updateColors(){
  var randColor = Math.floor(Math.random() * colorArray.length) ;
  document.body.style.backgroundColor = colorArray[randColor] ;
  document.getElementById('new-quote').style = 'background-color: ' + colorArray[randColor];
  document.getElementById('twitter-btn').style = 'background-color: ' + colorArray[randColor];
  document.getElementsByClassName(".btn-circle").style = "red";
  document.getElementById('quote').style = 'color: ' + colorArray[randColor];
  document.getElementById('quotation').style = 'color: ' + colorArray[randColor];
}

function shareTweet(){
  document.getElementById('twitter-btn').setAttribute('onclick',"location.href = 'https://twitter.com/intent/tweet?related=freecodecamp&text= "+"\""+currentQuote+"\" - "+ currentAuthor+"';") ;
}

function newQuote()
{
  updateQuote() ;
  updateColors() ;
  shareTweet() ;
};
