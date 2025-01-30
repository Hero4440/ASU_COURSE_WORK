class SimpleCalculations {
    addition(a, b) {
        return a + b;
    }
    subtraction(a, b) {
        return a - b;
    }
    multiplication(a, b) {
        return a * b;
    }
    division(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero!");
        }
        return a / b;
    }
}
module.exports = SimpleCalculations;