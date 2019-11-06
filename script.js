//---------------->first task

let fruits = [
    "HTML",
    11,
    "JavaScript",
    2,
    "CSS",
    23,
    12
];


fruits.push(-2);
fruits.unshift(1000);  
fruits.push("last array element");
console.log(fruits);

fruits.splice(3,1);
console.log(fruits);

let newFruits = fruits.filter(function(item){
    
    return typeof item === "number";

})

console.log(newFruits);

let powFruits = newFruits.map(function(value){
    return Math.pow(value,2);
});
console.log(powFruits);

console.log(Math.max(...powFruits));