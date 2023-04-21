// Create an array containing the names of all items in the inventory.
// Create a separate array with the corresponding stock quantities of each item.
let nameItems=["kales","mangoes","corn","cabbages","apples"];
let quantity=[10,90,70,20,100];
let bothArrays = {}
nameItems.forEach((Element, index)=>{
    bothArrays[Element]=quantity[index]
})
console.log(bothArrays)


//a function to add a new item to the inventory, updating both arrays.

function addNewItem(){
   bothArrays.Grapes = 100
}
addNewItem()
console.log(bothArrays)

// Write a function to update the stock quantity of an existing item.

function updateQuantity(){
   bothArrays["corn"] = 90
}
updateQuantity()
console.log(bothArrays)

//  Write a function to calculate the total number of items in the inventory.
 
 let value = 0
function findTotalItems (){
   let total = Object.values(bothArrays)
    let sum = total.reduce((first, last)=>first+last,value);
    console.log(sum);
}
findTotalItems()


// Write a function to find the item with the lowest stock quantity.
 
function getLowestStock() {
   let minIndex = 0;
   for (let i = 1; i < quantity.length; i++) {
     if (quantity[i] < quantity[minIndex]) {
       minIndex = i;
     }
   }
   return nameItems[minIndex];
 }
 console.log(getLowestStock())
 



