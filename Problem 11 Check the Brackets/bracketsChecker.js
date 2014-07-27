/**
 * Created by Любомир on 25.7.2014 г..
 */
function checkBrackets(value) {
    var array = value.split("");
    var length = array.length;
    var bracketCount=0;
    for (var i = 0; i < length; i++) {
        if(array[i]=="("){
            bracketCount++;
        }else if(array[i]==")"){
            bracketCount--;
        }

    }
    if(bracketCount==0){
        console.log("Correct")
    }else{
        console.log("Incorrect")
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');