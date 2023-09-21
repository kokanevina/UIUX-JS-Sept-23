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

const stId=student1.studentId
console.log(stId);
let {studentId,studentName,studentPercentage}=student1;
console.log(studentId);
console.log(studentPercentage);
