function res(result) {

    console.log(result);
    }
    function sum(a,b){
    var sum = a + b;
    res(sum);
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
    function(result) {sum(5,5);},
    function(error) {sum(error);}
    );