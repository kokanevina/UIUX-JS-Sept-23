function add(...ar){
       // console.log(ar);
    if(ar.length==0)
        return 0
    else
       return ar.reduce((acc,ele)=>acc+ele);
}
console.log(add(12,23));
add(67,89,45,66);
add();
add(45);
add(345,234);
let ages =[56,78,34,3,45,67,89,12];    let ages2=new Array(56,78,90,4,344);
add(ages);

let myages=ages; // this is not a copy  (shallow copy) new ref points to same array

ages[0]=90;
console.log(myages);

// copy one array to new array

let newarray=[...ages];   // deep copy
//console.log(newarray);

let array2=new Array(...ages); // deep copy
console.log(array2);
ages[0]=11;
//console.log(ages);
//console.log(newarray);

let ar1=["seema","meera"];
let ar2=["mahi",'mohan'];

// copy ar1 and ar2 in 3rd array ar3
let ar3=[...ar1,...ar2];

function getNames(name, ...names){
    console.log(name);
    console.log(names);
}
getNames('airoli','rabale','ghansoli');
//can a function have multiple var args or not? : NO



let cities=['pune','mumbai','solapur'];
cities=[...cities,'delhi'];

const lines=['harbour','central'];
lines.push('transharbour');
lines=[...lines,'westeren'];  /// error

const myAge=67;
myAge=99; // error
