type Student = {
    id: number;
    name: string;
    score: number;
}

const students: Student[] = [
    { id: 1, name: 'Alice', score: 88 },
    { id: 2, name: 'Bob', score: 72 },
    { id: 3, name: 'Charlie', score: 95 },
    { id: 4, name: 'David', score: 50 },
    { id: 5, name: 'Eva', score: 76 }
];

//map
//---------------------------------------------//
const studentsName = students.map((student)=>student.name);
console.log("Name of students : ", studentsName)

const incrementScore = students.map((student)=>student.score += student.score * 0.05);
console.log("Incremented score : ", incrementScore)
//---------------------------------------------//


//reduce
//---------------------------------------------//
const totalScore = students.reduce(((accumulatingScore, student)=> accumulatingScore += student.score),0);
console.log("Total score : ", totalScore)

const avgScore = totalScore / students.length
console.log("Average score : ", avgScore)

//---------------------------------------------//
function reducer (allNames:string, student:Student) :string {
    return allNames = allNames + "," + student.name;
}

const reducer1 = (allNames:string, student:Student) : string => {
    return allNames = allNames + "," + student.name
}

const reducer2 = (allNames:string, student:Student) : string => allNames = allNames + "," + student.name

const names = students.reduce(reducer, "");
console.log("scores : ", names)

//---------------------------------------------//
interface Scores {
    [name: string]: Number;
}

const dictMaker = (acc:Scores, student:Student) => {
    acc[student.name] = student.score;
    return acc;
}

const dictionary = students.reduce(dictMaker, {});
console.log("scores : ", dictionary)

//some
//---------------------------------------------//
const anyFailed = students.some((student)=>student.score < 60);
console.log("Any one failed : ", anyFailed)
//---------------------------------------------//


//every
//---------------------------------------------//
const allAbove50 = students.every((student)=>student.score > 50);
console.log("All scored greater than or equal to half : ", allAbove50)
//---------------------------------------------//
