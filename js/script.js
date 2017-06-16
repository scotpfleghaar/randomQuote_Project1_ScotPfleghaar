// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//////////////////////////
// Project One Complete With extra credit requirements met. Took 7 hours to complete! and it was a blast!
//////////////////////////

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
    tag: "Attitude",
    citation: "",
    year: ""
}, {
    quote: "Attitude is a little thing that makes a big difference.",
    source: "Winston Churchill",
    tag: "Attitude",
    citation: "",
    year: ""
}, {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    tag: "Perspective",
    citation: "",
    year: ""
}, {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    tag: "Perspective",
    citation: "",
    year: ""
}, {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    tag: "Funny",
    citation: "",
    year: ""
}, {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    source: "Bernard M. Baruch",
    tag: "Attitude",
    citation: "",
    year: ""
}, {
    quote: "A room without books is like a body without a soul.",
    source: "Marcus Tullius Cicero",
    tag: "Perspective",
    citation: "",
    year: ""
}, {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: "Dr. Seuss",
    tag: "Perspective",
    citation: "",
    year: ""
}, {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    tag: "Funny",
    citation: "",
    year: ""
}, {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    tag: "Attitude",
    citation: "Harry Potter and the Goblet of Fire",
    year: "2000"
}, {
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: " J.K. Rowling",
    tag: "Perspective",
    citation: "",
    year: ""
}];

var quote = ''; //Used to Experment with a shuffling algorithm
var quotes2 = []; //Initiation of quotes2 used in final deciding shuffling algorithm

//Experimentation of the Fisher-Yates Algorithm to see if it would be a good fit for the code challange.
//// Fisher-Yates Shuffle To Make sure there are the quotes are shuffled through at least once.
/*
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
shuffle(quotes);
console.log(quotes[0]); //Test 1
console.log(quotes[1]); //Test 2
console.log(quotes[2]); //Test 3
console.log(quotes[3]); //Test 4
*/

// Random Quote Generator used to shuffle and choose next quote.
function getRandomQuote() {

    var random = quotes[Math.floor(Math.random() * quotes.length)]; //Random Number Generator scalable for any number of quotes.
    var splicedQuote = quotes.splice(random, 1)[0]; //Splicing the first Array to be pushed into the second array.
    quotes2.push(splicedQuote); //Pushing the part from the first quote to the second while insureing previous quotes are not used until completely run through.
    if (quotes.length === 0) {
        quotes = quotes2;
        quotes2 = [];
    }
    console.log(splicedQuote); //If you review this is it not actually random
    return splicedQuote;

}

// Generator for randemly greating a color, also found in the course work
function randomColourGenerator() { // Sorry for the canadian spelling, I am working on it.
    var randomColor; //Initiation of the randomColour variable
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return randomColor;
}

// Function to print the final quote to the page with the elements that will display and not "undefined"
function print(quote) {
    var outputDiv = document.getElementById('quote-box');
    outputDiv.innerHTML = quote;
}

// This was some code that I found on stackoverflow that helped me craft the random quote generator function.
/*
document.getElementById("loadQuote").onclick = function () {
    var indexToSplice = Math.floor(Math.random() * quotes.length);
    var spliceQuote = quotes.splice(indexToSplice, 1);
    quotes2.push(spliceQuote);
    print(spliceQuote);

    if (quotes.length == 0) {
        quotes = quotes2;
        quotes2 = [];
    }
};
*/

// The function that is displayed through index.html
function printQuote() {
    var random = getRandomQuote(); // Initializing the random number to be used consistantly throughout the function
    quote += '<p class="quote">' + random.quote + '</p>';
    quote += '<p class="source">' + random.source + '';

    // Tests to see of there content in citation to avoid undefined to be displayed
    if (random.citation !== undefined) {
        quote += '<span class ="citation">' + random.citation + '</span>';
    }

    // Tests to see of there content in year to avoid undefined to be displayed
    if (random.year !== undefined) {
        quote += '<span class ="year">' + random.year + '</span>';
    }

    // Tests to see of there content in tag to avoid undefined to be displayed
    if (random.tag !== undefined) {
        quote += '<span class ="tag">' + random.tag + '</span>';
    }
    quote += '</p>';

    print(quote); // Contains the final message to be displayed to the page!

    quote = ' '; //Clears Previous Quote

    randomColourGenerator() //Calling the randomColourGenerator
    document.getElementById('colour').style.backgroundColor = randomColourGenerator(); // Pushing the generated code to index.html to be displayed

    // This is the original code that allowed me to display the code on the web page, but I was not able to figure out how to prevent it from displaying array objects that were empty
    /*
    document.getElementById('quote-box').innerHTML =
        '<p class = "tag">' + random.tag + '</p>' +
        '<p class = "quote">' + random.quote + '</p>' +
        '<p class = "source">' + random.source + '</p>' +
        '<p class = "citation">' + random.citation + '</p>' +
        '<p class = "year">' + random.year + '</p>';
  */

}


document.getElementById('loadQuote').addEventListener("click", printQuote, false); // This is the code that when the button is pressed, the code can be displayed to the web page.
