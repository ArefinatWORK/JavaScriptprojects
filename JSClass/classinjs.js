class person {
    constructor(myname) {
    this.belong = myname;
    }
    present() {
    return 'My name is ' + this.belong;
    }
    }
    class name extends person {
    constructor(myname, per) {
    super(myname);
    this.human = per;
    }
    show() {
    return this.present() + ', And your name is ' + this.human; 
    } 
    } 

let myCar = new person("Ayan", "Daiyan");
console.log(myCar.show());