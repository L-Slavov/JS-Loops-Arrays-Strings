/**
 * Created by Любомир on 23.7.2014 г..
 */
function compareNumbers(a, b) {
    return a - b;
}
function findMinAndMax(value) {
    var numbers = value.toString();
    var numbArray = numbers.split(',');

    numbArray.sort(compareNumbers);
    return "Min--> "+numbArray[0] + "\n"+"Max--> "+(numbArray[numbArray.length-1]);

}
console.log(findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]));
console.log(findMinAndMax([2, 2, 2, 2, 2]));
console.log(findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]));