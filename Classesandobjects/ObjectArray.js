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
const students=[student1,student2,student3,student4, new Student(108,'Kartik',78.9)];
students.push(new Student(111,'Kiran',80.5));

// iterate the array using forEach
students.forEach(student=>console.log(student))
students.forEach(student=>console.log(student.getDetails()))

// Display students having percentage >= 85  : filter
let cleverStudents = students.filter(student=>student.studentPercentage>=85)
cleverStudents.forEach(student=>console.log(student))
//students.filter(student=>student.studentPercentage>=85).forEach(student=>console.log(student))

// add prefix "Neo-" to every student name and save that student in new array
students.map(student=>"Neo-"+student.studentName).forEach(ele=>console.log(ele));

students.map(student=>new Student(student.studentId, "Neo-"+student.studentName,student.studentPercentage))
        .forEach(ele=>console.log(ele));