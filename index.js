const a = parseFloat(prompt("Enter coefficient a"));
const b = parseFloat(prompt("Enter coefficient b"));
const c = parseFloat(prompt("Enter coefficient c"));

const x = solveSquareEquation(a, b, c);

alert(x);


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





