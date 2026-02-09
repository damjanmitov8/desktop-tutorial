// Create a constructor function for Student objects with:
// Properties:
// firstName
// lastName
// birthYear
// academy
// grades - array of numbers
// Methods:
// getAge() - returns age of student
// getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
// getGradesAverage() - returns the average of the student grades
// Create an array with 3 students

function Student(firstName,lastName,birthYear,academy,grades){
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.academy = academy
    this.grades = grades

    this.getAge = function(){
        let today = new Date()
        return today.getFullYear() - this.birthYear
    }
    this.getInfo = function(){
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`
    }
       
    this.getGradesAverage = function(){
        let sum = 0
        for(let i = 0; i < this.grades.length; i++){
            sum += this.grades[i]
        }
        let average = sum / this.grades.length
        return average
    }
    this.summary = `${this.getInfo()}, ${this.getAge()}, average grade: ${this.getGradesAverage()}`;
}



let damjan = new Student('Damjan','Mitov',2002,'Quinshift',[3,4,5,4])
let martin = new Student('Martin','Nikolovski',1993,'Brainster',[5,5,5,4])
let matej = new Student('Matej','Stojanovski',1986,'Sivus',[3,3,4,4])

console.log(damjan.summary)
console.log(martin.summary)
console.log(matej.summary)
