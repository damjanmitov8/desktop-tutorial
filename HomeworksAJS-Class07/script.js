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

    // New requirements
    
    let studentOlder30 = data
    .filter(student => student.age > 30)
    .map(student => `My name is: ${student.firstName} ${student.lastName}; From: ${student.city}`)
    console.log(studentOlder30)

    let studentsWithLetterB = data
    .filter(student => student.firstName[0] === 'B')
    .map(student => `My name is: ${student.firstName} ${student.lastName}; From: ${student.city}`)
    console.log(studentsWithLetterB)

    let studentsEmails = data
    .map(student => student.email)
    console.log(studentsEmails)

    let studentExactly3Grade = data
    .filter(student => student.averageGrade === 3)
    .map(student => `${student.firstName} ${student.lastName}`)
    console.log(studentExactly3Grade)


    let femaleCounter = 0
    let maleCounter = 0
    data.forEach((student) => {
        if(student.gender === 'Male'){
            maleCounter++
        }else{
            femaleCounter++
        }
    })
    console.log(`Female students : ${femaleCounter}`)
    console.log(`Male students: ${maleCounter}`)


    // Ova e istoto resenie za poslednata tocka sakav da probam i so reduce kako se resava ,so mala pomos od net ja resiv :)
    let femaleAndMaleStudents = data.reduce((acc,student) => {
        if(student.gender === 'Male'){
            acc.male = acc.male || 0
           acc.male++
        }else{
            acc.female = acc.female || 0
           acc.female++
        }
        return acc
    },{})
    console.log(femaleAndMaleStudents)


}).catch(error => {
    console.log(error)
}) 

