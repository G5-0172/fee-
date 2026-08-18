// inventory of the bill we made in file array
console.log()
console.log("Inventory Entry System");
console.log();
const prompt = require("prompt-sync")();
let stock = []; // created empty array


// function 
function addStock()
{
    let item_code = Number(prompt("Enter Item Code: "));
    let item_name = prompt("Enter Item Name: ");
    let item_price = Number(prompt("Enter Price: "));
    let item_quantity = Number(prompt("Enter Quantity: "));


// object is a collection of pair (property and value)
let item = {
    code: item_code,
    item: item_name,
    price: item_price,
    quantity: item_quantity,
};
// new technical term for property is key
stock.push(item);  // now stock is array of objects
console.log("\n Inventory Updated");
console.log();
}



//while loop
while(true){
    addStock(); // calling the function in loop
    let loop = prompt("Add More Items (0 for NO/ 1 for YES): ");
    loop = parseInt(loop);
    if(loop === 0 ) {break;}
}
console.log("\n Inventory Entery Completed ! ");
console.log("\n Updated Stock is as follows");
console.log(stock);
console.log();