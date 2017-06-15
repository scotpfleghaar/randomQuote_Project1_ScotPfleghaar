// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//Array object to quotes
var quotes = [{
    quote: "You should learn from your competitor, but never copy. Copy and you die.",
    source: "Jack Ma",
    tag: "Funny"

}, {
    quote: "Good artists copy, great artists steal.",
    source: "Pablo Picasso",
    tag: "Funny"
}, {
    quote: "People may hear your words, but they feel your attitude.",
    source: "John C. Maxwell",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "Attitude is a little thing that makes a big difference.",
    source: "Winston Churchill",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    source: "Bernard M. Baruch",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "A room without books is like a body without a soul.",
    source: "Marcus Tullius Cicero",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: "Dr. Seuss",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    tag: "",
    citation: "",
    year: ""
}, {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    tag: "",
    citation: "Harry Potter and the Goblet of Fire",
    year: "2000"
}, {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: " J.K. Rowling",
    tag: "Insight",
    citation: "",
    year: ""
}];
var quotes2 = [];

var quote = '';
function getRandomQuote() {

    var random = quotes[Math.floor(Math.random() * quotes.length)];
    return random;

}

function print(quote) {
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = quote;
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function printQuote() {
    var random = getRandomQuote();
    console.log(random);
    quote += '<p class="quote">' + random.quote + '</p>';
    quote += '<p class="source">' + random.source + '';
    if (random.citation !== undefined) {
        quote += '<span class ="citation">' + random.citation + '</span>';
    }
    if (random.year !== undefined) {
        quote += '<span class ="year">' + random.year + '</span>';
    }
    if (random.tag !== undefined) {
        quote += '<span class ="tag">' + random.tag + '</span>';
    }
    quote += '</p>';
    print(quote);
    quote = ' '; //Clears Previous Quote
    /*
    document.getElementById('quote-box').innerHTML =
        '<p class = "tag">' + random.tag + '</p>' +
        '<p class = "quote">' + random.quote + '</p>' +
        '<p class = "source">' + random.source + '</p>' +
        '<p class = "citation">' + random.citation + '</p>' +
        '<p class = "year">' + random.year + '</p>';
  */

}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//////////////////////////
