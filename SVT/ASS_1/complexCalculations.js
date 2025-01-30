class ComplexCalculations {
    modulus(a, b) {
        return a % b;
    }
    exponentiation(a, b) {
        return Math.pow(a, b);
    }
    squareRoot(a) {
        if (a < 0) {
            throw new Error("Cannot calculate square root of a negative number!");
        }
        return Math.sqrt(a);
    }
}

module.exports = ComplexCalculations;