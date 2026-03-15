
const prompt = require("prompt-sync")();

main()
function main(){
    let noOfStudents = prompt("How many students do you have? ")
    let noOfSubjects = prompt("How many subjects do they offer? ")
    savingResponse()

    let grades = inputStudentsGrades(noOfStudents, noOfSubjects)

    displayAllStudentsGrades(grades)
    displaySubjectSummary(grades)
    displayClassSummary(grades)
}

function displayClassSummary(grades){
    console.log("CLASS SUMMARY")
    line()
    console.log("Best Graduating Student is: Student ", getBestGraduatingStudentAndScore(grades)[0], " scoring ", getBestGraduatingStudentAndScore(grades)[1])
    line()
    console.log()
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log("Worst Graduating Student is: Student ", getWorstGraduatingStudentAndScore(grades)[0], " scoring ", getWorstGraduatingStudentAndScore(grades)[1])
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log()
    line()
    console.log("Class Total score is: ", getClassTotalScore(grades))
    console.log("Class Average score is: ", getClassAverageScore(grades).toFixed(2))
    line()
}

function displaySubjectSummary(grades){
    console.log("SUBJECT SUMMARY")
    let subjectHighestScores = getSubjectHighestScores(grades)
    let subjectHighestStudents = getSubjectHighestScoringStudent(grades)
    let subjectLowestScores = getSubjectsLowestScores(grades)
    let subjectLowestStudents = getSubjectLowestScoringStudent(grades)
    let subjectTotals = getSubjectTotals(grades)
    let subjectAverages = getSubjectAverages(grades)
    let subjectPasses = getSubjectPasses(grades)
    let subjectFailures = getSubjectFailures(grades)

    for(let i = 0; i < grades[0].length; i++){
        console.log("Subject ", i + 1)
        console.log("Highest Scoring Student: is Student ", subjectHighestStudents[i], " scoring ", subjectHighestScores[i])
        console.log("Lowest Scoring Student: is Student ", subjectLowestStudents[i], " scoring ", subjectLowestScores[i])
        console.log("Total Score is: ", subjectTotals[i])
        console.log("Average Score is: ", subjectAverages[i].toFixed(2))
        console.log("Number of Passes: ", subjectPasses[i])
        console.log("Number of Fails: ", subjectFailures[i])
        console.log()
    }

    console.log("The hardest subject is Subject ", getHardestSubjectWithFailures(grades)[0], " with ", getHardestSubjectWithFailures(grades)[1], " failures")
    console.log("The easies subject is Subject ", getEasiestSubjectWithPasses(grades)[0], " with ", getEasiestSubjectWithPasses(grades)[1], " passes")
    console.log("The overall Highest score is scored by Student ", getOverallHighestScoreDetails(grades)[0], " in subject ", getOverallHighestScoreDetails(grades)[1], " scoring ", getOverallHighestScoreDetails(grades)[2])
    console.log("The overall Lowest score is scored by Student ", getOverallLowestScoreDetails(grades)[0], " in subject ", getOverallLowestScoreDetails(grades)[1], " scoring ", getOverallLowestScoreDetails(grades)[2])
    line()
    console.log("\n")
}

function displayAllStudentsGrades(grades){
    let totals = getAllStudentTotals(grades);
    let averages = getAllStudentAverages(grades);
    let positions = getStudentPositions(grades);

    line()
    process.stdout.write("STUDENT\t\t");
    for(let i = 0; i < grades[0].length; i++){
        process.stdout.write("SUB" + (i + 1) +"\t");
    }
    process.stdout.write("TOT\tAVE\tPOS\n");
    line()

    for(let i = 0; i < grades.length; i++){
        process.stdout.write("Student " + (i + 1) + "\t")
        for (let j = 0; j < grades[0].length; j++){
            process.stdout.write(grades[i][j] + "\t")
        }
        process.stdout.write(totals[i] + "\t" + averages[i].toFixed(2) + "\t" + positions[i] + "\n")
    }
    line()
    line()
}

function inputStudentsGrades(noOfStudents, noOfSubjects){
    let grades = []
    let grade = -1
    for (let student = 0; student < noOfStudents; student++){
        grades[student] = []

        for (let subject = 0; subject < noOfSubjects; subject++){
            grade = -1
            while (grade < 0 || grade > 100){
                console.log("Entering Score for Student ", student + 1)
                console.log("Enter Score for Subject ", subject + 1)
                grade = prompt()
                grades[student][subject] = parseInt(grade)

                if(grade < 0 || grade > 100) console.log("Grade must be between 0 and 100!!")
            }
            savingResponse()
        }
    }
    return grades;
}

function savingResponse(){
    console.log("Saving >>>>>>>>>>>>>>>>>>>>>>>")
    console.log("Saved successfully")
}

function line(){
    console.log("===========================================================================")
}

function getAllStudentTotals(allGrades){
    let totals = []
    let sum

    for(let student of allGrades){
        sum = 0
        for(let grade of student){
            sum += grade;
        }
        totals.push(sum)
    }
    return totals;
}

function getAllStudentAverages(grades){
    let totals = getAllStudentTotals(grades);
    let averages = []
    let average
    for(let total of totals){
        average = 0
        average = (total / grades[0].length).toFixed(2)
        averages.push(parseFloat(average))
    }
    return averages;
}

function getStudentPositions(grades){
    let totals = getAllStudentAverages(grades);
    let positions = []

    for(let i = 0; i < totals.length; i++){
        let position = 1
        for(let j = 0; j < totals.length; j++){
            if(totals[i] < totals[j]) position++
        }
        positions[i] = position
    }
    return positions;
}

function getSubjectHighestScores(grades){
    let highestScores = []
    let largest = 0

    for(let i = 0; i < grades[0].length; i++){
        largest = 0
        for(let j = 0; j < grades.length; j++){
            if(grades[j][i] > largest){
                largest = grades[j][i]
            }
        }
        highestScores[i] = largest
    }
    return highestScores;
}

function getSubjectHighestScoringStudent(grades){
    let highestScores = getSubjectHighestScores(grades);
    let highestStudents = []

    for(let i = 0; i < grades[0].length; i++){

        for(let j = 0; j < grades.length; j++){
            if(grades[j][i] === highestScores[i]){
                highestStudents[i] = j + 1;
            }
        }
    }
     return highestStudents;
}

function getSubjectsLowestScores(grades){
    let lowestScores = []
    let lowest = 0

    for(let i = 0; i < grades[0].length; i++){
        lowest = 100
        for(let j = 0; j < grades.length; j++){
            if(grades[j][i] < lowest){
                lowest = grades[j][i]
            }
        }
        lowestScores[i] = lowest
    }
    return lowestScores;
}

function getSubjectLowestScoringStudent(grades) {
    let lowestScores = getSubjectsLowestScores(grades);
    let lowestStudents = []

    for (let i = 0; i < grades[0].length; i++) {
        for (let j = 0; j < grades.length; j++) {
            if (grades[j][i] === lowestScores[i]) {
                lowestStudents[i] = j + 1;
            }
        }
    }
    return lowestStudents;
}

function getSubjectTotals(grades){
    let totals = []
    let sum = 0
    for(let i = 0; i < grades[0].length; i++){
        sum = 0
        for(let j = 0; j < grades.length; j++){
            sum += grades[j][i]
        }
        totals[i] = sum;
    }
    return totals;
}

function getSubjectAverages(grades){
    let averages = []
    let totals = getSubjectTotals(grades);
    for(let i = 0; i < totals.length; i++){
        averages[i] = parseFloat((totals[i] / grades.length).toFixed(2))
    }
    return averages;
}

function getSubjectPasses(grades){
    let passes = []
    let passCounter = 0
    for(let i = 0; i < grades[0].length; i++){
        passCounter = 0
        for(let j = 0; j < grades.length; j++){
            if(grades[j][i] >= 45) passCounter++
        }
        passes[i] = passCounter
    }
    return passes;
}

function getSubjectFailures(grades){
    let passes = getSubjectPasses(grades);
    let failures = []
    for(let value of passes){
        failures.push(grades.length - value)
    }
    return failures;
}

function getHardestSubjectWithFailures(grades){
    let failures = getSubjectFailures(grades);
    let hardestSubjectDetails = []
    let highestFailure = failures[0]
    for(let value of failures){
        if(value > highestFailure){
            highestFailure = value
        }
    }
    hardestSubjectDetails[1] = highestFailure

    for(let i = 0; i < failures.length; i++){
        if(failures[i] === hardestSubjectDetails[1]){
            highestFailure = i + 1
        }
    }
    hardestSubjectDetails[0] = highestFailure
    return hardestSubjectDetails;
}

function getEasiestSubjectWithPasses(grades){
    let passes = getSubjectPasses(grades);
    let easiestSubjectDetails = []
    let highestPasses = passes[0]
    for(let value of passes){
        if(value > highestPasses){
            highestPasses = value
        }
    }
    easiestSubjectDetails[1] = highestPasses;

    for(let i = 0; i < passes.length; i++){
        if(passes[i] === easiestSubjectDetails[1]){
            highestPasses = i + 1
        }
    }
    easiestSubjectDetails[0] = highestPasses;
    return easiestSubjectDetails;
}

function getOverallHighestScoreDetails(grades){
    let highestScores = getSubjectHighestScores(grades);
    let highestStudents = getSubjectHighestScoringStudent(grades);
    let overallHighestDetails = []
    let largest = 0

    for(let i = 0; i < highestScores.length; i++){
        if(highestScores[i] > largest){
            largest = highestScores[i]
            overallHighestDetails[2] = largest
            overallHighestDetails[0] = highestStudents[i]
            overallHighestDetails[1] = i + 1
        }
    }
    return overallHighestDetails;
}

function getOverallLowestScoreDetails(grades){
    let lowestScores = getSubjectsLowestScores(grades);
    let lowestStudents = getSubjectLowestScoringStudent(grades);
    let overallLowestDetails = []
    let smallest = 100

    for(let i = 0; i < lowestScores.length; i++){
        if(lowestScores[i] < smallest){
            smallest = lowestScores[i]
            overallLowestDetails[2] = smallest
            overallLowestDetails[0] = lowestStudents[i]
            overallLowestDetails[1] = i + 1
        }
    }
    return overallLowestDetails;
}

function getBestGraduatingStudentAndScore(grades){
    let totals = getAllStudentTotals(grades);
    let bgsDetails = []
    let largest = 0
    for(let i = 0; i < totals.length; i++){
        if(totals[i] > largest){
            largest = totals[i]
            bgsDetails[0] = i + 1
            bgsDetails[1] = largest
        }
    }
    return bgsDetails;
}

function getWorstGraduatingStudentAndScore(grades){
    let totals = getAllStudentTotals(grades);
    let worstGradStudentDetails = []
    let smallest = 10000
    for(let i = 0; i < totals.length; i++){
        if(totals[i] < smallest){
            smallest = totals[i]
            worstGradStudentDetails[0] = i + 1
            worstGradStudentDetails[1] = smallest
        }
    }
    return worstGradStudentDetails;
}

function getClassTotalScore(grades){
    let totals = getAllStudentTotals(grades);
    let sum = 0
    for(let total of totals){
        sum += total
    }
    return sum;
}

function getClassAverageScore(grades){
    let classTotalScore = getClassTotalScore(grades);
    let classAverage = (classTotalScore / grades.length).toFixed(2)
    return parseFloat(classAverage)
}


module.exports = {getAllStudentTotals, getAllStudentAverages, getStudentPositions, getSubjectHighestScores, getSubjectHighestScoringStudent, getSubjectsLowestScores, getSubjectLowestScoringStudent, getSubjectTotals, getSubjectAverages, getSubjectPasses, getSubjectFailures, getHardestSubjectWithFailures, getEasiestSubjectWithPasses, getOverallHighestScoreDetails, getOverallLowestScoreDetails, getBestGraduatingStudentAndScore, getWorstGraduatingStudentAndScore, getClassTotalScore, getClassAverageScore};