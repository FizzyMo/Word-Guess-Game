var word = "";
var guess = "";
var guesses = [];
var num = 0;
var wrong = 0;
var blah = false;
var possibleWords = ['leona', 'sivir', 'jinx', 'ahri', 'teemo', 'braum', 'nautilus', 'diana', 'morgana', 'missfortune', 'caitlyn', 'tristana', 'masteryi', 'soraka', 'rakan', 'xayah', 'ashe', 'vi', 'irelia'];

var def = ['i must not fall', 'everyone has a price', 'i feel like i forgot to shoot something', 'dont you trust me', 'ill scout ahead', 'you hit like baby ram', 'all will drown', 'no more lies', 'without mercy', 'i know what im doing', 'boom headshot', 'get in my way i dare ya', 'form before strength', 'this is my path', 'you going to marry me today', 'compromise is so unsatisfying', 'i always take the high ground', 'here i come to save the day.. or wreck it', 'tyrant'];



document.getElementById("guess")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode == 10) {
            document.getElementById("check").click();
        }
    });

function start() {
    document.getElementById("g").innerHTML = "10";
    guess = "";
    guesses = [];
    num = 0;
    count = 0;
    score = 0;
    word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log(word);
    document.getElementById("G").innerHTML = guesses;
    document.getElementById("hint").innerHTML = "";
    document.getElementById("message").innerHTML = '';
    document.getElementById("word").innerHTML = '';
    for (i = 0; i < 12; i++) {
        document.getElementById(i).innerHTML = "";
    }
    for (i = 0; i < word.length; i++) {
        document.getElementById(i).innerHTML = "_";
    }
    console.log(newWords.length());
    console.log(def.length());
}

function guessing() {
    guess = document.getElementById("guess").value;
    guess = guess.toLowerCase();
    if (guess !== null) {
        if (guesses.includes(guess)) { } else {

        }
    }

    print();
}

function print() {
    for (i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            document.getElementById(i).innerHTML = guess;
        }
    }
    if (!(word.includes(guess))) {
        if (!(guesses.includes(guess))) {
            count = count + 1;
            var left = 5 - count;
            if (left === 0) {
                document.getElementById("message").innerHTML = 'You Lost :(';
                document.getElementById("word").innerHTML = 'The word was: ' + word;
            }
            document.getElementById("g").innerHTML = left;
            guesses.push(guess);
            document.getElementById("G").innerHTML = guesses;
        }
    }


    if (!(guesses.includes(guess))) {
        guesses.push(guess);
        document.getElementById("G").innerHTML = guesses;
    }
    document.getElementById("guess").value = "";
    won();
    document.getElementById("guess").value = "";

}

function hint() {
    var a = possibleWords.indexOf(word);
    console.log(a);
    document.getElementById("hint").innerHTML = def[a];
}

function won() {
    var x = "";
    var y = 0;
    for (i = 0; i < word.length; i++) {
        i = i.toString();
        x = document.getElementById(i).innerHTML;
        console.log(x);
        if (x != "_") {
            y += 1;
            console.log(x);
            console.log(y);
        }
    }
    if (y === word.length) {
        document.getElementById("message").innerHTML = 'You Won!!! Good job. You either googled the answers of you play league!';
    }
}