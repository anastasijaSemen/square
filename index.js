const a = parseInt(prompt("Enter coefficient a"));
const b = parseInt(prompt("Enter coefficient b"));
const c = parseInt(prompt("Enter coefficient c"));

const result = solveSquareEquation(a, b, c);

alert(result);


function solveSquareEquation(a, b, c) {
    const d = b * b - 4 * a * c;

    if (d < 0) {
        return "There is no solution to the equation";
    } else {
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        return "There is two solution to the equation: " + x1 + " and " + x2;
    }
}





