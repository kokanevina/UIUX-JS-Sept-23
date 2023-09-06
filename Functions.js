

const myFun=function(/*parameters */){
    //logic
}

myFun();

const cubeFun= function(number){
    return number*number*number;
}
let cub=cubeFun(56);
console.log("Cube of number is "+cub);
console.log(`Cube of number is ${cub}`);

//1. no name to function ,2. no function keyword 3. fat arrow between () and {}

const arrowFun1=()=>{
    // logic here
}

arrowFun1();

const arrowFun2=(num)=>{
    return num * num;
}

let square=arrowFun2(3);
console.log(`Square of number is ${square}`);
// 1. if function is accepting single parameter then () are optional
//2. if function has single stmt in body then {} are optional (special rule for return stmt)
const arrowFun3=num=>console.log(num*num);
//3. if function returning result and if it is a single stmt then {} optional
// but return keyword also not allowed
const arrowFun4=num=>num * num;

square=arrowFun4(5);
console.log(`Square of number is ${square}`);
document.write(`Square of number is ${square}`);