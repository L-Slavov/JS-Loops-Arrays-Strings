/**
 * Created by Любомир on 25.7.2014 г..
 */
function findMostFreqWord(value) {
    var wordArray = value.split(/[,. ]+/);
    wordArray.pop();
    var uniqueWords=[];

    for (var i in wordArray) {
        if (uniqueWords.indexOf(wordArray[i]) === -1) { // if elements doesn't exist, add it to the array
            uniqueWords.push(wordArray[i]);
        }
    }

    var wordCounter = new Array(uniqueWords.length + 1).join('0').split('').map(parseFloat);


    for (var i in uniqueWords) {
        for (var j in wordArray) {
            if (uniqueWords[i] == wordArray[j]) {
                wordCounter[i]++;
            }
        }

    }


    var result = wordCounter.indexOf(Math.max.apply(Math, wordCounter));
    console.log(uniqueWords[result]+" -->"+wordCounter[result]+" times")
    console.log("------------------------------")



}
findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');