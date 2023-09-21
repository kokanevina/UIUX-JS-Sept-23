class Address{
    flatNumber;
    city;
    pincode;
    state;

    constructor(flatNumber,city,pincode,state){
        this.flatNumber=flatNumber;
        this.city=city;
        this.pincode=pincode;
        this.state=state;
    }

}


class Student{
    studentId;
    studentName;
    studentPercentage;
    studentAddress;

    constructor(id=0,sname="AAA",studentPercentage=30, address){
        console.log("in constructor body....");
        this.studentId=id;
        this.studentName=sname;
        this.studentPercentage=studentPercentage;
        this.studentAddress=address
    }

    getDetails(){
        return `Student Details 
        ID: ${this.studentId}
        NAME: ${this.studentName}
        PERCENTAGE:${this.studentPercentage}`
    }
}
let studAddress=new Address('F-1221','Thane',400000,'Maharashtra');
let student1=new Student(111,"Pavan",89.7,studAddress);
console.log(student1);

// display student1 living in which state
console.log(student1.studentAddress.state);
// change pincode of student1 to 400500

student1.studentAddress.pincode=400500;
console.log(student1);

let add=student1.studentAddress;
let flatN=add.flatNumber;

const {studentId,studentName, studentPercentage, studentAddress}=student1;
console.log(studentId);
console.log(studentAddress);

const {flatNumber,city,pincode,state}=studentAddress;