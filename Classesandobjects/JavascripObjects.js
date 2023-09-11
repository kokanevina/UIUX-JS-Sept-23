let student={
    id:345,
    sname:'Pooja',
    percentage:78
}
console.log(student.id);
console.log(`Student ID: ${student.id}`);

let students=[
    {
        id:345,
        sname:'Pooja',
        percentage:78
    },
    {
        id:555,
        sname:'Amar',
        percentage:89
    },
    {
        id:222,
        sname:'Suman',
        percentage:67.6
    }
]

for(let stud of students){
    console.log(stud.id);
    console.log(stud.sname);
    console.log(stud.percentage);
}


let students2=[
    {
        id:345,
        sname:{ firstName:'Pooja', lastName:"Raut"},
        percentage:78
    },
    {
        id:555,
        sname:{ firstName:'Amar', lastName:"Raut"},
        percentage:89
    },
    {
        id:222,
        sname:{ firstName:'Suman', lastName:"Raut"},
        percentage:67.6
    }
]
for(let stud of students2){
    console.log(stud.id);
    console.log(stud.sname.firstName);
    console.log(stud.sname.lastName);
    console.log(stud.percentage);
}
