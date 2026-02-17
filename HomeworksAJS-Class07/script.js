// Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2

fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
.then(respone => respone.json())
.then(data => {
    let studentsAbove3 = data.filter(student => student.averageGrade > 3)
    console.log(studentsAbove3)
    
    let femaleStudentAbove3 = data
    .filter(student => student.averageGrade === 5 && student.gender === 'Female')
    .map(femaleName => femaleName.firstName)
    console.log(femaleStudentAbove3)
    
    let maleStudentsAbove18 = data.
    filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age >= 18)
    .map(maleNames => `${maleNames.firstName} ${maleNames.lastName}`)
    console.log(maleStudentsAbove18)

    let averageGradesOfFemale = data
    .filter(student => student.gender ==='Female' && student.age > 24)
    .map(avgGrade => avgGrade.averageGrade)
    console.log(averageGradesOfFemale)

    let maleNamesWithB = data
    .filter(student => student.gender === 'Male' && student.firstName[0] === 'B' && student.averageGrade > 2)
    console.log(maleNamesWithB)

})