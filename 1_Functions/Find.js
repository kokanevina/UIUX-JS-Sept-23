// declare array with employee names ['Vina', 'Mayur','mohini']
// find first matching name starts with 'M'/ 'm'
// by built in method find

let nameArray=['Karuna','arun', 'Meera','mohan','Seema','mayura','MeeTa']
let result=nameArray.find(empname=>empname.toLowerCase().startsWith('m'))
console.log(result);

// below logic is just to show the iterations
let result2=nameArray.find(empname=>{console.log("Hi");return empname.toLowerCase().startsWith('m');})
console.log(result2);

// declare array with employee names ['Vina', 'Mayur','mohini']
// find all matching name starts with 'M'/ 'm'
// by built in method filter

let result3=nameArray.filter(empname=>empname.toLowerCase().startsWith('m'))
console.log(result3);

// below logic is just to show the iterations
let result4=nameArray.filter(empname=>{console.log("Hi");return empname.toLowerCase().startsWith('m');})
console.log(result4);