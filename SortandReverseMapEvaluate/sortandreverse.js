var num = ["String","Boolean","Number","Undefined"]
function ordered(){
    num.sort(function(a,b) {return a - b})
    
    console.log(num)
}
ordered()
function unordered(){
    num.reverse(function(a,b) {return b - a})
    
    console.log(num)
}
unordered()