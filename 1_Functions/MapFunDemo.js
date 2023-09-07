
let nameArray=['Karuna','aRun', 'Meera','mohaN','Seema','maYUra','MeeTa']
// every employee should be prefixed with "NEO-", every name should be first letter capital
//["NEO-Karuna", "NEO-Arun","NEO-Meera" . . .  ]

// map method

let prefixedArray=nameArray.map(ename=>"NEO-"+ename.charAt(0).toUpperCase()+ename.slice(1).toLowerCase());
prefixedArray.forEach(en=>console.log(en));
console.log("-----------------");
nameArray.map(ename=>"NEO-"+ename.charAt(0).toUpperCase()+ename.slice(1).toLowerCase()).forEach(en=>console.log(en));
