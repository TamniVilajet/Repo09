// Only change code below this line
function inverseWhile() {
    var i = 5;
    var fiveNumbers = '';
    while(i >= 0){
        fiveNumbers = fiveNumbers + i + ((i !== 0) ? "," : "");
        i--; 
    }
    return fiveNumbers;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;