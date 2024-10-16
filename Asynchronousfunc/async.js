function Modulus(result) {
    console.log("49 mod 7 is: " + result)
    }
    function mod(a,b){
    var mod = a % b;
    Modulus(mod);
    }
    let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
    if (x == 0) {
    myResolve ("OK");
    }
     else {
    myReject("Error");
    }
    });
    myPromise.then(
    function(result) {mod(49,7);},
    function(error) {mod(error);}
    );

    async function add(a, b) {
        let response = await a + b;
        display(response);
        }
        function display(some) {
        console.log("The addition of 5 and 20 is: " + some);
        }
    add(5, 20);
    