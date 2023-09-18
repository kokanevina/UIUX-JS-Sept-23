

let numArray=new Array(56,34,12,67,45,56,12);
console.log(numArray);
console.log(numArray[0]);
numArray.push(13,34,57);

let numberSet=new Set();
numberSet.add(56);
numberSet.add(34);
numberSet.add(12);
numberSet.add(67);
numberSet.add(45);
numberSet.add(56);
numberSet.add(12);
numberSet.add("hi");

console.log(numberSet);
console.log(numberSet.has(56));
// implement full Set API