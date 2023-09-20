

let employeeMap=new Map();
employeeMap.set(666,45000);
employeeMap.set(111,67000);
employeeMap.set(333,45000);
employeeMap.set(453,90000)
employeeMap.set(231,78000)
employeeMap.set(231,56000)

console.log(employeeMap); // interal iteration both key value
let ids=employeeMap.keys();
console.log(ids);

let salaries=employeeMap.values();
console.log(salaries);

let sal=employeeMap.get(333);
console.log(sal);

console.log(employeeMap.has(231));
console.log(employeeMap.delete(111));

console.log(employeeMap); 

let itr=employeeMap.entries();
console.log(itr.next()); //  moves pointer ahead and returns the record
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());


itr=employeeMap.entries();
/*  done=false means map is not yet ended, we can iterate it. */
let entry=itr.next();
while(entry.done==false){
    console.log(entry.value);
    entry=itr.next();
}
// false==false : true
// true==false : false