//if we want to delete an item in the array from start or end typescript provides us two methods 
// Pop:Pop is use to delete an item from end of the array
//Shift :Shift is use to delete an item from biginning of the array
//Example 1
let fruits = ["App;e","Mango","banana"];
console.log("original array:",fruits);   //Output:Original array:["Apple","Mango","Banana"]

//delete an element from biginning of the array using
fruits.pop();
console.log("Array after pop:",fruits);   //Output:Array after pop["Apple","Mango",