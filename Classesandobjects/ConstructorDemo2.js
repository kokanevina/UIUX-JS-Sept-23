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
let stud1=new Student(100,"Pooja",90.6); // call automatically goes to p-constructor
 console.log(stud1.getDetails())

 let stud2=new Student(110,"Pooja",92.6); // call automatically goes to p-constructor
 console.log(stud2.getDetails())

 let stud3=new Student(112,"Mohan"); 
 console.log(stud3.getDetails())

 let stud4=new Student(105); 
 console.log(stud4.getDetails())


 let stud5=new Student(); 
 console.log(stud5.getDetails())

 console.log(stud1.studentId);
 console.log(stud1.studentName);
 console.log(stud1.studentPercentage);

// iterate object using for in loop
for(let key in stud1){
    console.log(key);
    console.log(stud1[key]);
}

// variable holding the value a=78
// variable holding another variable key=studenId

// cloning
let stud6=new Student(stud1.studentId,stud2.studentName,stud3.studentPercentage);