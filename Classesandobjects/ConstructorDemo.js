class Student{
    studentId;
    studentName;
    studentPercentage;

    constructor(){
        console.log("in constructor body....");
        this.studentId=0;
        this.studentName="ABC";
        this.studentPercentage=30;
    }

    getDetails(){
        return `Student Details 
        ID: ${this.studentId}
        NAME: ${this.studentName}
        PERCENTAGE:${this.studentPercentage}`
    }
}
let stud1=new Student(); // call automatically goes to constructor
 console.log(stud1.getDetails())

 let stud2=new Student(); // call automatically goes to constructor
 console.log(stud2.getDetails())

 // state change
 stud1.studentId=100;
 stud1.studentName="Pooja";
 stud1.studentPercentage=90.6;

 stud2.studentId=110;
 stud2.studentName="Pooja";
 stud2.studentPercentage=92.6;