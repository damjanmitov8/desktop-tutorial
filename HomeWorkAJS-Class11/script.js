// Exercise 1
// Create a Person constructor function that has:

// firstName
// lastName
// age
// getFullName - method
// Create a Student constructor function that inherits from Person and has:

// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects

// function Person(firstName,lastName,age,) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age

//     this.getFullName = function(){
//         console.log(`I'm ${this.firstName} ${this.lastName}`)
//     }
// }

// function Student(firstName,lastName,age,academyName,studentId){
//     Object.setPrototypeOf(this,new Person(firstName,lastName,age))
//     this.academyName = academyName
//     this.studentId = studentId

//     this.study = function(){
//         console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
//     }
// }

// let student1 = new Student('Damjan','Mitov',24,'Avenga',26)
// let student2 = new Student('John','Boss',43,'Avenga',2)

// console.log(student1)
// student1.getFullName()
// student1.study()

// console.log(student2)
// student2.getFullName()
// student2.study()




// Exercise 2
// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!
// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working on the project of that type and set the value to true on the property of the project
// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy


function Person(firstName,lastName,age,) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

    this.getFullName = function(){
        console.log(`I'm ${this.firstName} ${this.lastName}`)
    }
}

Person.prototype.getAcademy = function(){
    return `${this.firstName} ${this.lastName} is in ${this.academyName}`
}

function Student(firstName,lastName,age,academyName,studentId){
    Object.setPrototypeOf(this,new Person(firstName,lastName,age))
    this.academyName = academyName
    this.studentId = studentId

    this.study = function(){
        console.log(`The student ${this.firstName} is studying in the ${this.academyName} academy`)
    }
}


function DesignStudent(firstName,lastName,age,studentId,isStudentOfTheMonth){
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,'Design',studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth
    this.attendAdobeExam = function(){
        console.log(`The student ${firstName} is doing adobe exam!`)
    }
}

function CodeStudent(firstName,lastName,age,studentId,hasIndividualProject = false,hasGroupProject = false){
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,'Code',studentId))
    this.hasIndividualProject = hasIndividualProject
    this.hasGroupProject = hasGroupProject
    this.doProject = function(type){
        if(type === 'invidual'){
            console.log(`${firstName} ${lastName} is working invidual project`)
            this.hasIndividualProject = true
        }else if(type === 'group'){
            console.log(`${firstName} ${lastName} is working group project`)
            this.hasGroupProject = true
        }
    }
}

function NetworkStudent(firstName,lastName,age,studentId,academyPart){
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,'Network',studentId))
    this.academyPart = academyPart
    this.attendCiscoExam = function(){
        console.log(`The student ${firstName} is doing cisco exam`)
    }
}

let desingStudent = new DesignStudent('Martin','Ivanovski',25,4,false)
console.log(desingStudent)
desingStudent.getFullName()
desingStudent.study()
desingStudent.attendAdobeExam()
desingStudent.getAcademy()

let codeStudent = new CodeStudent('Damjan','Mitov',24,1)
console.log(codeStudent)
codeStudent.getFullName()
codeStudent.study()
codeStudent.doProject('invidual')
codeStudent.getAcademy()

let networkStudent = new NetworkStudent('Ivan','Stojanovski',26,2,1)
console.log(networkStudent)
networkStudent.getFullName()
networkStudent.study()
networkStudent.attendCiscoExam()
networkStudent.getAcademy()


// EXAMPLE 2 

// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// Person.prototype.getFullName = function() {
//     return `I'm ${this.firstName} ${this.lastName}`;
// };

// Person.prototype.getAcademy = function() {
//     return `${this.firstName} ${this.lastName} is in ${this.academyName} academy`;
// };

// function Student(firstName, lastName, age, academyName, studentId) {
//     Person.call(this, firstName, lastName, age);
//     this.academyName = academyName;
//     this.studentId = studentId;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function() {
//     console.log(`The student ${this.firstName} is studying in the ${this.academyName} academy`);
// };

// function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth) {
//     Student.call(this, firstName, lastName, age, "Design", studentId);
//     this.isStudentOfTheMonth = isStudentOfTheMonth;
// }

// DesignStudent.prototype = Object.create(Student.prototype);
// DesignStudent.prototype.constructor = DesignStudent;

// DesignStudent.prototype.attendAdobeExam = function() {
//     console.log(`The student ${this.firstName} is doing an Adobe exam!`);
// };

// function CodeStudent(firstName, lastName, age, studentId, hasIndividualProject = false, hasGroupProject = false) {
//     Student.call(this, firstName, lastName, age, "Code", studentId);
//     this.hasIndividualProject = hasIndividualProject;
//     this.hasGroupProject = hasGroupProject;
// }

// CodeStudent.prototype = Object.create(Student.prototype);
// CodeStudent.prototype.constructor = CodeStudent;

// CodeStudent.prototype.doProject = function(type) {
//     if (type === "individual") {
//         console.log(`${this.firstName} ${this.lastName} is working on an individual project`);
//         this.hasIndividualProject = true;
//     } else if (type === "group") {
//         console.log(`${this.firstName} ${this.lastName} is working on a group project`);
//         this.hasGroupProject = true;
//     }
// };

// function NetworkStudent(firstName, lastName, age, studentId, academyPart) {
//     Student.call(this, firstName, lastName, age, "Network", studentId);
//     this.academyPart = academyPart;
// }

// NetworkStudent.prototype = Object.create(Student.prototype);
// NetworkStudent.prototype.constructor = NetworkStudent;

// NetworkStudent.prototype.attendCiscoExam = function() {
//     console.log(`The student ${this.firstName} is doing a Cisco exam!`);
// };

// let designStudent1 = new DesignStudent('Martin','Ivanovski',25,4,false);
// let codeStudent1 = new CodeStudent('Damjan','Mitov',24,1);
// let networkStudent1 = new NetworkStudent('Ivan','Stojanovski',26,2,1);

// console.log(designStudent1)
// console.log(designStudent1.getFullName());
// designStudent1.study();
// designStudent1.attendAdobeExam();
// console.log(designStudent1.getAcademy());

// console.log(codeStudent1)
// console.log(codeStudent1.getFullName());
// codeStudent1.study();
// codeStudent1.doProject('individual');
// console.log(codeStudent1.getAcademy());

// console.log(networkStudent1)
// console.log(networkStudent1.getFullName());
// networkStudent1.study();
// networkStudent1.attendCiscoExam();
// console.log(networkStudent1.getAcademy());