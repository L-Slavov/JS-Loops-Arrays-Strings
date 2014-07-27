/**
 * Created by Любомир on 25.7.2014 г..
 */
function reverseString(value) {
    var stringArray = value.split('');
    stringArray = stringArray.reverse();
    var reverseString = '';
    for (var key in stringArray) {
        reverseString += stringArray[key];
    }
    return reverseString;
}
console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java Script'));