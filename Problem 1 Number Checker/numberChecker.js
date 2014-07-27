/**
 * Created by Любомир on 23.7.2014 г..
 */
function printNumbers(n) {

    var numbers="";
    for (var i = 1; i < n; i++) {
        if (i % 4 != 0 && i % 5 != 0) {
            numbers+= i+" ";

        }
    }
    if(numbers==""){
        numbers="no"
    }
    return numbers;
}
console.log(printNumbers(20));
console.log(printNumbers(1));
console.log(printNumbers(13));