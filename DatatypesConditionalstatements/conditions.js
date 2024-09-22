var greeting;
var time = new Date() .getHours();

if (time < 12) {
    greeting = "Good Morning";
}
else if (time = 12) {
    greeting = "Good Noon";
}
else if (time < 18) {
    greeting = "Good afternoon";
}
else if (time < 22) {
    greeting = "Good Evening";
}
else {
    greeting = "Good Evening";
}
console.log(time)
console.log(greeting)
