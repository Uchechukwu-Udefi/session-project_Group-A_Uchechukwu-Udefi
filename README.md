# Imperative vs Declarative Programming in JavaScript

## Imperative Programming

Imperative programming is a programming paradigm that uses statements to change a program's state. It focuses on describing how a program operates.

### Key Points:
- **How to do it**: Specifies the steps that the computer must take to accomplish the goal.
- **Control Flow**: Uses loops, conditionals, and statements to control the flow of the program.
- **State Management**: Manages the state of the program explicitly. (mutable)

`- **Examples**: `for` loops, `while` loops, and traditional `if` statements.`

#### Example:
```javascript

let x = 2
let y = 3
// Imperative approach to sum an array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // Output: 15
```

## Declarative Programming

Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow. It focuses on what the program should accomplish.

### Key Points:
- **What to do**: Specifies what the program should accomplish without explicitly listing commands or steps.
- **Abstraction**: Higher level of abstraction, often using functions and expressions.
- **State Management**: Manages state implicitly.(immutable)

`- **Examples**: Functional programming, using methods like `map`, `filter`, and `reduce`.`

#### Example:
```javascript
const x = 2
const y = 3
// Declarative approach to sum an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
```
