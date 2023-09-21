

let arr1=[45,67,23,89];
let arr2=['hello','hi','welcome'];


let arr3=[345,"Karuna","LD",'Neosoft',12000.687];  //5
// store every value of an array in seperate variable  without iteration

const id=arr3[0];
const ename=arr3[1];
const dcode=arr3[2];
/* above method makes the code lengthier : solution : array destructuring*/

const [eid,empname,did,cname,salary]=arr3;
console.log(eid);
console.log(cname);


const [empId, ...restArray]=arr3;
console.log(empId);
console.log(restArray);