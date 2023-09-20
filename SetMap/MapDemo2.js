class Student{
    studentId;
    studentName;
    studentPercentage;

    constructor(id=0,sname="AAA",studentPercentage=30){
        console.log("in constructor body....");
        this.studentId=id;
        this.studentName=sname;
        this.studentPercentage=studentPercentage;
    }

    getDetails(){
        return `Student Details 
        ID: ${this.studentId}
        NAME: ${this.studentName}
        PERCENTAGE:${this.studentPercentage}`
    }
}

const student1=new Student(100,"Pooja",89.7);
const student2=new Student(101,"Poonam",90.5);
const student3=new Student(110,"Raja",89.7);
const student4=new Student(105,"Pavan",85);

let teachingMap=new Map();
teachingMap.set('v322',student1);
teachingMap.set('v122',student3);
teachingMap.set('p777',student2);
// trainer v122 teaching to which student?

console.log("Trainer v122 is teaching to "+ teachingMap.get('v122'));
console.log("Trainer v122 is teaching to ",  teachingMap.get('v122'));