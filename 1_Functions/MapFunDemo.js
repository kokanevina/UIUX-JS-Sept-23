
let nameArray=['Karuna','aRun', 'Meera','mohaN','Seema','maYUra','MeeTa']
// every employee should be prefixed with "NEO-", every name should be first letter capital
//["NEO-Karuna", "NEO-Arun","NEO-Meera" . . .  ]

// map method

let prefixedArray=nameArray.map(ename=>"NEO-"+ename.charAt(0).toUpperCase()+ename.slice(1).toLowerCase());
prefixedArray.forEach(en=>console.log(en));
console.log("-----------------");
nameArray.map(ename=>"NEO-"+ename.charAt(0).toUpperCase()+ename.slice(1).toLowerCase())
         .forEach(en=>console.log(en));

let salaries=[56000,78000,89000,98000,99000,78000,67000,56000];
console.log("-----------------");
// Increment those salaries by 5000 which are less than 70000  // chaining
salaries.filter(salary=>salary<70000).map(salary=>salary+5000).forEach(salary=>console.log(salary));
