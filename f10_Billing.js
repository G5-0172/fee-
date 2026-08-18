// Bill using array
console.clear();
const store = "\t---ABC Store---";
console.log();
console.log(store);
console.log();

let items = ["item1", "item2", "item3"]; // array of products or items
let prices = [20000,50000,30000]; // we use array so that we don't need multiple variables


// some methods 
items.push("item4", "item5"); // adds items to the array
items.pop(); // removes last item from array
prices.push("45000")

console.log("SrNo.: \t","Item: \t", "Price: ");// here item is object and length is attribute


// Loop
for(let i=0; i<items.length; i++){
console.log((i+1)+"\t" , items[i]+"\t" , prices[i]+"\t" );
}
console.log();


// input
const prompt = require("prompt-sync")();
let item = Number(prompt("Enter Item No.: "));
let quantity = Number(prompt("Enter Quantity: "));
let price = prices[item-1]*quantity;

// discount 
if(price>=50000){
    discount = price*0.05;
}
else if(price>=30000){
    discount = price*0.02;
}
else{
    discount = price*0.01;
}


// output
console.log("Amount: ", price);
console.log("Discount: ", discount);
console.log("Total Bill: ",price - discount);
console.log();
const end = "\t------END------";
console.log(end)
console.log();