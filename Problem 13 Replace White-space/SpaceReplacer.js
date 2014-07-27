/**
 * Created by Любомир on 27.7.2014 г..
 */
function replaceSpaces(str) {
    var re = new RegExp(" ", 'g'); //create a regex to match
    var result = str.replace(re, "")
    return result;
}

console.log(replaceSpaces("But you were living in another world tryin' to get your message through"));
