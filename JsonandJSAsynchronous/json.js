var object = {name: "Ayan", age: "14", favspo: "Football"}
var json = JSON.stringify(object)
var newobject = JSON.parse(json)
console.log(newobject.name)
console.log(newobject.age)
console.log(newobject.favspo)