class Car {
    constructor(myname) {
    this.carname = myname;
    }
    present() {
    return 'I have a ' + this.carname;
    }
    }
    class Model extends Car {
    constructor(myname, mod) {
    super(myname);
    this.model = mod;
    }
    show() {
    return this.present() + ', it is a ' + this.model; 
    } 
    } 

let myCar = new Model("Ayan", "Cadillac");
console.log(myCar.show());