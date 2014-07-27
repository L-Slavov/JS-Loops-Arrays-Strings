/**
 * Created by Любомир on 25.7.2014 г..
 */
function findMostFreqNum(array) {
    array.sort(sorter);
    var counter = 1;
    var map = [];

    var length = array.length;


    for (var i = 0; i < length; i++) {
        if (i != length) {
            if (array[i] == array[i + 1]) {
                counter++;
            } else {
                map.push(array[i], counter);
                counter = 1;
            }
        }

    }
    length = map.length;
    var log;
    var logPosition;

    for (var i = 0; i < length; i++) {

        if (i % 2 == 1 && i == 1) {
            log = map[i];
            logPosition = i;

        } else if (i % 2 == 1) {

            if (log < map[i]) {
                log = map[i];
                logPosition = i;

            }
        }
    }
    return map[logPosition - 1] + " " + "(" + log + " times)";
}
function sorter(a, b) {
    return a - b
}
console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
