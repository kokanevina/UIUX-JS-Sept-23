let salaries=[56000,78000,89000,98000,99000,78000,67000,56000];
// sum of array elements
// reduce method
salaries.reduce((accumulator, salary)=>{
    console.log("acc:"+accumulator);
    console.log("salary:"+salary);
})
console.log("----------------");
let sum=salaries.reduce((accumulator, salary)=>accumulator+salary);
console.log(sum);

console.log("----------------");
salaries.reduce((accumulator, salary)=>{
    console.log("acc:"+accumulator);
    console.log("salary:"+salary);
}, 10000)
console.log("----------------");
let sum2=salaries.reduce((accumulator, salary)=>accumulator+salary, 10000);
console.log(sum2);