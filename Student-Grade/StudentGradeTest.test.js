const {getAllStudentTotals, getAllStudentAverages, getStudentPositions, getSubjectHighestScores, getSubjectHighestScoringStudent, getSubjectsLowestScores, getSubjectLowestScoringStudent, getSubjectTotals, getSubjectAverages, getSubjectPasses, getSubjectFailures, getHardestSubjectWithFailures, getEasiestSubjectWithPasses, getOverallHighestScoreDetails, getOverallLowestScoreDetails, getBestGraduatingStudentAndScore, getWorstGraduatingStudentAndScore, getClassTotalScore, getClassAverageScore} = require('./StudentGrade')

test("test to get the total of four students", () => {
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
})

test("test to get the averages of four students", () => {
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getAllStudentAverages(grades)).toEqual([45.67,72,51.33,75.67])
})

test("test to get the positions of four student based on their totals", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getStudentPositions(grades)).toEqual([4,2,3,1])
})

test("test to get the highest scores in each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getSubjectHighestScores(grades)).toEqual([98,83,66])
})

test("test to get highest scoring student in each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getSubjectHighestScores(grades)).toEqual([98,83,66])
    expect(getSubjectHighestScoringStudent(grades)).toEqual([2,4,4])
})

test("test to get the lowest scores in each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getSubjectsLowestScores(grades)).toEqual([67,21,27])
})

test("test to get the lowest scoring student in each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getSubjectsLowestScores(grades)).toEqual([67,21,27])
    expect(getSubjectLowestScoringStudent(grades)).toEqual([1,1,3])
})

test("test to get the totals of each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectTotals(grades)).toEqual([336,200,198])
})

test("test to get the averages of each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectTotals(grades)).toEqual([336,200,198])
    expect(getSubjectAverages(grades)).toEqual([84.00,50.00,49.50])
})

test("test to get number of passes of each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectPasses(grades)).toEqual([4,2,3])
})

test("test to get number of failures of each subject", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectPasses(grades)).toEqual([4,2,3])
    expect(getSubjectFailures(grades)).toEqual([0,2,1])
})

test("test to get the hardest subject with  number of failures ", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectFailures(grades)).toEqual([0,2,1])
    expect(getHardestSubjectWithFailures(grades)).toEqual([2,2])
})


test("test to get the easiest subject with  number of passes ", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectPasses(grades)).toEqual([4,2,3])
    expect(getEasiestSubjectWithPasses(grades)).toEqual([1,4])
})

test("test to get the overall highest scoring student in a subject with the score", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectHighestScores(grades)).toEqual([98,83,66])
    expect(getSubjectHighestScoringStudent(grades)).toEqual([2,4,4])
    expect(getOverallHighestScoreDetails(grades)).toEqual([2,1,98])
})

test("test to get the overall lowest scoring student in a subject with the score", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getSubjectsLowestScores(grades)).toEqual([67,21,27])
    expect(getSubjectLowestScoringStudent(grades)).toEqual([1,1,3])
    expect(getOverallLowestScoreDetails(grades)).toEqual([1,2,21])
})

test("test to get best graduating student with total score", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getBestGraduatingStudentAndScore(grades)).toEqual([4,227])
})

test("test to get worst graduating student with total score", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getWorstGraduatingStudentAndScore(grades)).toEqual([1,137])
})

test("test to get the class total score", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getClassTotalScore(grades)).toEqual(734)
})

test("test to get the class average score", () =>{
    let grades = [
        [67,21,49],
        [98,62,56],
        [93,34,27],
        [78,83,66]
    ]
    expect(getAllStudentTotals(grades)).toEqual([137,216,154,227])
    expect(getClassTotalScore(grades)).toEqual(734)
    expect(getClassAverageScore(grades)).toEqual(183.5)
})