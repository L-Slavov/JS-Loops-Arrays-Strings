/**
 * Created by Любомир on 25.7.2014 г..
 */
function sortArray(array) {
var sorted=array.sort(sorter);
    return sorted;
}
function sorter(a, b){return a-b}
console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));