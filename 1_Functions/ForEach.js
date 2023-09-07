
let nameArray=['Karuna','arun', 'Meera','mohan','Seema','mayura','MeeTa']
// for
// for of
// forEach method
nameArray.forEach(ename=>console.log(ename));
nameArray.forEach((ename,i)=>console.log(ename+" "+i));
nameArray.forEach((ename,i,ref)=>console.log(ename+" "+i+" "+ref));
nameArray.forEach(function(ename){
console.log(ename);
});
let myIteration=function(ename){
    console.log(ename);
}
nameArray.forEach(myIteration);
let myIteration2=ename=>console.log(ename);
nameArray.forEach(myIteration2);