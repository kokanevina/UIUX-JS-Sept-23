let id=89;
function test(){

}

class Student{
    studentId;
    studentName;
    studentPercentage;

    getDetails(){
        return `Student Details 
        ID: ${this.studentId}
        NAME: ${this.studentName}
        PERCENTAGE:${this.studentPercentage}`
    }
}

let stud1=new Student(); // object comes in existence
console.log(stud1.getDetails());