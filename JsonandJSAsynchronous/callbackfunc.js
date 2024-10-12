function result(res) {
    console.log(res)
    }
function calc(num1, num2, myCallback) {
    let mul = num1 * num2;
    myCallback(mul);
    }
calc(8, 10,result);

function calculator(num1, num2, myCallback) {
    let div = num1 / num2;
    myCallback(div);
    }
calculator(21, 7,result);