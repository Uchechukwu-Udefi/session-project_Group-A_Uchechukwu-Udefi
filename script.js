/**
 * Ternary Operator - Short hand if else statement, used to assign a value to a variable based on a condition
 */

// if registered, display welcome back message , else display please register to continue
// if admin, display Admin, else display User



//  && - and
//  || - or
//  ! - not
// == - equal value
// === - equal value and equal type
let isRegistered = true;
let isAdmin = !false;

/**
 * In this code i have refactored the if else statement to a ternary operator
 */
const role = isRegistered && isAdmin ?  console.log("Welcome back Admin") :  console.log("Please register to continue") 

const str = "12345"
const num = 0
const bool = false
const arr = []
const nullish = null
const und = undefined

// if(isRegistered && isAdmin){ 
//     console.log("Welcome back Admin");
// }else{
//     console.log("Please register to continue")  
// }

console.log("7" == 7); // true - Loose equality operator
console.log("7" === 7); // false - Strict equality operator


/**
 * Array manipulation of students
 */

const studentName = document.querySelector("#studentName");
const isRegisteredContainer = document.querySelector("#isRegistered");
const studentAge = document.querySelector("#studentAge");
const coursesContainer = document.querySelector("#courses");


const students = [
    {
        name: "John Doe",
        isRegistered: true,
        age: 20,
        courses: ["Math", "English", "Science"],
    },
    {
        name: "Jane Doe",
        isRegistered: false,
        age: 22,
        courses: [],
    },
    {
        name: "James Doe",
        isRegistered: true,
        age: 25,
        courses: ["Math", "Science"],
    },
]

// DRY - Don't Repeat Yourself


/**
 * Firstly check if the student is registered or not
 * If the student is registered, display the student's name and age
 * If the student is not registered, display a message that the student is not registered
 * Only display courses if the student is registered else display a message that the student is not registered
 * Display the student's courses in a list
 */



