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
const student5=new Student(105,"Pavan",85);

let studentSet=new Set();
studentSet.add(student1);
studentSet.add(student2);
studentSet.add(student3);
studentSet.add(student4);
studentSet.add(student5);
studentSet.forEach(student=>console.log(student));