let sports = ["Football","Badminton","Basketball","Tennis","Cricket"];

console.log("Today, I will be talking about my Favourite Outdoor Sports")

let joined = sports.join(", ");
console.log("My Top 5 Favourite Outdoor Sports are: " + joined);
console.log("Among them, my Favourite is " + sports[0]);
console.log("And my 2nd Favourite is " + sports[1]);
console.log("Then is " + sports[2]);
console.log("After that, it will be " + sports[3]);
console.log("And at last, it will be " + sports[4] + " which I play very less.");
let popped = sports.pop();
console.log("So, among my 5 Favourite Sports, my Less Favourite Sports is " + popped)