var num = [5, 15, 45, 85]
function mynums(number){
    return number - 5
}
var newnum = num.map(mynums)
console.log(newnum)
console.log(num)