/**
 * Created by Любомир on 24.7.2014 г..
 */
(function displayProperties(value) {

    var keys = [];
    for (var key in document) {
        keys.push(key);
    }
    return keys;

}());