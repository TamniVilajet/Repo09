// Only change code below this line
function myForLoop1() {
    var evenNumbers = '';
    for(var i = 0; i<9; i++) {
        if(i%2===0){
            evenNumbers = evenNumbers + i + ((i != 8) ? ", " : "");
        }
    }
    return evenNumbers;
}

function myForLoop2() {
    var evenInverseNumbers = '';
    for(var i = 9; i>=0; i--) {
        if(i%2===0){
            evenInverseNumbers = evenInverseNumbers + i + ((i != 0) ? ", " : "");
        }
    }
    return evenInverseNumbers;

}
console.log(myForLoop1());
console.log(myForLoop2());

// Only change code above this line

module.exports = {
    myForLoop1,
    myForLoop2
};