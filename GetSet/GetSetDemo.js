class Student{
    #studentId;
    #studentName;
    #studentPercentage;
    constructor(id=0,sname="AAA",studentPercentage=30){
        console.log("in constructor body....");
        this.#studentId=id;
        this.#studentName=sname;
        this.#studentPercentage=studentPercentage;
    }
    get sid(){
        return this.#studentId;
    }  
    get sname(){
        return this.#studentName;
    }
    set sname(studentName){
        this.#studentName=studentName;
    }
    // create get property for  studentPercentage

    // create set property for  studentId and studentPercentage
    getDetails(){ 
        return `Student Details 
        ID: ${this.#studentId}
        NAME: ${this.#studentName}
        PERCENTAGE:${this.#studentPercentage}`
    }
}// ended here
let student1=new Student(333,'Poonam',78.5);
//console.log(student1.#studentId); //Property '#studentId' is not accessible outside class 'Student' because it has a private identifier.
//console.log(student1.#studentName);
//console.log(student1.#studentPercentage);
student1.getDetails();

console.log(student1.sid); // 333
console.log(student1.sname); // Poonam
// display studentPercentage via get property

//student1.#studentName="Kirti";
student1.sname="Kirti";
// set new percentge for student1 using set property
//student1.sname("Suhasini");  : error
console.log(student1);