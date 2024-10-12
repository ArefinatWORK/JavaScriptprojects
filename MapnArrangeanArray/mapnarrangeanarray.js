var num = [1, 3, 5, 7, 9]
function mynums(number){
    return number * 5
}
var newnum = num.map(mynums)
console.log("The original Array that I created is: " + num)
console.log("The Array that I created after Mapping: " + newnum)

function ascending(){
    newnum.sort(function(a,b) {return a - b})
    
    console.log("The Ascending Order of the Mapped Array: " + newnum)
}
ascending()
function descending(){
    newnum.reverse(function(a,b) {return b - a})
    
    console.log("The Descending Order of the Mapped Array: " + newnum)
}
descending()