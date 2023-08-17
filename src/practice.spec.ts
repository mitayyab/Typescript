import { studentNames, incrementScores, getTotalScore, getAvgScore, getAllNames, dictMaker, didAnyFail, allAbove50 } from "./practice";

const students = [
    { id: 1, name: "Alice", score: 88 },
    { id: 2, name: "Bob", score: 72 },
    { id: 3, name: "Charlie", score: 95 },
    { id: 4, name: "David", score: 50 },
    { id: 5, name: "Eva", score: 76 }
];

describe("practice", () => {

    describe("studentNames", () => {
        it("should return array containing just the names", () => {
            
            expect(studentNames(students)).toEqual(["Alice", "Bob", "Charlie", "David", "Eva"]);
        });    
    });
    
    describe("incrementScores", () => {
        it("should return array of incremented scores", () => {
            expect(incrementScores(students)).toEqual([
                { id: 1, name: "Alice", score: 92.4 },
                { id: 2, name: "Bob", score: 75.6 },
                { id: 3, name: "Charlie", score: 99.75 },
                { id: 4, name: "David", score: 52.5 },
                { id: 5, name: "Eva", score: 79.8 }
            ]);
        });
    });

    describe("getTotalScore", () => {
        it("should do return the total score of all students", () => {
            expect(getTotalScore(students)).toEqual(381);
        });
    });

    describe("getAvgScore", ()=> {
        it("should return avg score of all students", () => {
            expect(getAvgScore(students)).toEqual(76.2);
        });
    });

    describe("getAllNames", ()=>{
        it("should return comma separated names of all students in a single string", ()=>{
            expect(getAllNames(students)).toEqual("Alice, Bob, Charlie, David, Eva")
        });
    });

    describe("dictMaker", ()=>{
        it("should return a defined dictionary",()=>{
           expect(dictMaker(students)).toEqual({ "Alice": 88, "Bob": 72, "Charlie": 95, "David": 50, "Eva": 76 }); 
        });
    });

    describe("didAnyFail", ()=>{
        it("should return true if any of the student got score less than 60", ()=> {
            expect(didAnyFail(students)).toEqual(true);
        })

        it("should return false if none of the student got score less than 60", ()=> {
            expect(didAnyFail(students.filter(s => s.score >= 60))).toEqual(false);
        })
    });

    describe("allAbove50", ()=>{
        it("should return boolean as answer", ()=> {
            expect(allAbove50(students)).toEqual(false);
        })
    });
});
