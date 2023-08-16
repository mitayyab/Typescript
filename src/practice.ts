export type Student = {
    id: number;
    name: string;
    score: number;
}

// //map
// //---------------------------------------------//

export function studentNames(students: Student[]) : String[]{
    return students.map((student)=>student.name);
}

export function incrementScores(students: Student[]) : Student[] {
    return students.map((student: Student)=> ({...student, score: student.score + 0.05 * student.score}));
}

// //---------------------------------------------//


// //reduce
// //---------------------------------------------//
export function getTotalScore(students: Student[]) : number {
    return students.reduce(((accumulatingScore, student)=> accumulatingScore + student.score),0);
}

export function getAvgScore(students: Student[]) : number{
    return getTotalScore(students)/students.length
}
// //---------------------------------------------//

export function getAllNames(students: Student[]) : string {
    // function reducer (allNames:string, student:Student) :string {
    //     return allNames = allNames + "," + student.name;
    // }
    
    // const reducer1 = (allNames:string, student:Student) : string => {
    //     return allNames = allNames + "," + student.name
    // }
    
    // const reducer2 = (allNames:string, student:Student) : string => allNames = allNames + "," + student.name
    
    // return students.reduce(reducer, "");

    // return students
    // .map((student: Student)=> student.name)
    // .join(", ");

    return students.reduce((accumulator : string, student : Student, i:number)=> accumulator + student.name + (i < students.length - 1 ? ", ": ""), "");
}

// //---------------------------------------------//
interface Scores {
    [name: string]: number;
}

// export function dictMaker1(students: Student[]){
//     return students.reduce((studentDict : Scores, student : Student)=> ({...studentDict, []: }), {}); // 2 operations cannot be done in a single line here assignment and return are occuring, note that assignment does not give us something to return hence dont work
// } 

// export function dictMaker(students: Student[]): Scores{
//     return students.reduce((studentDict : Scores, student : Student)=> ({...studentDict, [student.name]: student.score}), {}); // this is alternate to above one 
// }

export function dictMaker(students: Student[]): Scores{
    return students.reduce((studentDict : Scores, student : Student)=> {
        studentDict[student.name] = student.score;
        return studentDict;
    }, {});
}

// //some
// //---------------------------------------------//
export function didAnyFail(students: Student[]) : boolean{
    return students.some((student)=> student.score < 60);
}
// //---------------------------------------------//


// //every
// //---------------------------------------------//
export function allAbove50(students: Student[]){
    return students.every((student)=> student.score > 50);
}
// //---------------------------------------------//
