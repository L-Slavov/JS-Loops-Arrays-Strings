/**
 * Created by Любомир on 25.7.2014 г..
 */
function findCardFrequency(value) {
    //Getting hand in array
    var cardArray = value.split(/[♣♦♥♠ ]+/);
    //removing last empty element
    cardArray.pop();
    //getting only "unique" cards
    var uniqueCards = [];
    for (var i in cardArray) {
        if (uniqueCards.indexOf(cardArray[i]) === -1) { // if elements doesn't exist, add it to the array
            uniqueCards.push(cardArray[i]);
        }
    }
    //creating array to keep track of how many cards of certain type there are
    var cardCounter = new Array(uniqueCards.length + 1).join('0').split('').map(parseFloat);

    for (var i in uniqueCards) {
        for (var j in cardArray) {
            if (uniqueCards[i] == cardArray[j]) {
                cardCounter[i]++;
            }
        }

    }
    var numberOfCards=cardArray.length;
    var length=uniqueCards.length;
    //calculating percentage and printing answer
    for(var i=0;i<length;i++){

        console.log(
            uniqueCards[i]+" -> "+((cardCounter[i]/numberOfCards)*100).toFixed(2)+"%"
        );


    }
console.log("------------------------------")


}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');