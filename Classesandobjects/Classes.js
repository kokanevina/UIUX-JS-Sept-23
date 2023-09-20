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
let stud1=new Student();
 console.log(stud1.getDetails())
// state change
stud1.studentId=100;
stud1.studentName="Hari"; stud1.studentPercentage=89.6;
console.log(stud1.getDetails())
 let stud2=new Student();
 stud2.studentId=120;
stud2.studentName="Mohit"; stud2.studentPercentage=86.6;
console.log(stud2.getDetails())
// display percentage of stud1
console.log(stud1.studentPercentage);
// what is the name of stud2?
console.log(stud2.studentName);

/*new object wont get created. instead new reference assgined to existing ob*/
let stud3=stud1;           // shalow copy 
stud3.studentName="Kritika";
console.log(stud1.studentName);
console.log(stud1.getDetails())
// cloning : deep copy
