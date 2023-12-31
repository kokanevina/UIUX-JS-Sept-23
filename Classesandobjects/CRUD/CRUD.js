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

let tableNode=null;
let tableBody=null;
let trNode=null;
let tdNode=null;
let deleteButton=null;
function createTable(){
    tableNode=document.createElement('table');
    tableNode.setAttribute('border','3');
    document.body.append(tableNode);
    tableNode.style.width='50%'
}
function addHeading(){
    // do ur own logic
}
createTable();
class CRUD{
     readData(){
        tableBody=document.createElement('tbody');
        for(let student of students){
            trNode=document.createElement('tr');
            for(let key in student){
                tdNode=document.createElement('td');
                tdNode.textContent=student[key];
                trNode.append(tdNode);

                deleteButton=document.createElement('button');
                deleteButton.setAttribute('id',)
            }
            tableBody.append(trNode) 
        }
        tableNode.append(tableBody);
    }
    addRow(student){
        trNode=document.createElement('tr');
            for(let key in student){
                tdNode=document.createElement('td');
                tdNode.textContent=student[key];
                trNode.append(tdNode);
            }
            tableBody.append(trNode) 
    }
    addData(student){
        students.push(student);
        this.addRow(student);
    }
}

let crud=new CRUD();
crud.readData();

function collect(event){
    event.preventDefault();
    // do the logic for extracting data from form
    let sid=parseInt(document.getElementById('id').value);
    let sname=document.getElementById('name').value;
    let spercent=parseFloat(document.getElementById('percent').value);
    let student=new Student(sid,sname,spercent);
    crud.addData(student);
}