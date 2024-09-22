var x = 10;
var y = 20;
var z = null;
var w; // undefined variable
{
    let x = 5; // Here value of a is 2 but only within the block
    const y = 15;
    console.log(x)
    console.log(y)
}
console.log(x)
console.log(y)
console.log(z)