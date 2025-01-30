const ComplexCalculations = require('../complexCalculations');
describe('ComplexCalculations', () => {
    let calc;
    beforeEach(() => {
        calc = new ComplexCalculations();
    });
    describe('modulus', () => {
        it('should return 1 for modulus of 5 and 2', () => {
            expect(calc.modulus(5, 2)).toBe(1);
        });

        it('should return 0 for modulus of 4 and 2', () => {
            expect(calc.modulus(4, 2)).toBe(0);
        });

        it('should return -1 for modulus of -5 and 2', () => {
            expect(calc.modulus(-5, 2)).toBe(-1);
        });
    });
    describe('exponentiation', () => {
        it('should return 8 for exponentiation of 2 to the power of 3', () => {
            expect(calc.exponentiation(2, 3)).toBe(8);
        });
        it('should return 1 for exponentiation of any number to the power of 0', () => {
            expect(calc.exponentiation(5, 0)).toBe(1);
        });
        it('should return 0.25 for exponentiation of 2 to the power of -2', () => {
            expect(calc.exponentiation(2, -2)).toBe(0.25);
        });
    });
    describe('squareRoot', () => {
        it('should return 3 for square root of 9', () => {
            expect(calc.squareRoot(9)).toBe(3);
        });
        it('should return 0 for square root of 0', () => {
            expect(calc.squareRoot(0)).toBe(0);
        });
        it('should throw an error when calculating square root of a negative number', () => {
            expect(() => calc.squareRoot(-1)).toThrow("Cannot calculate square root of a negative number!");
        });
    });
    describe('Integration Tests', () => {
        test('should return correct result for modulus and exponentiation combined', () => {
            const modResult = calc.modulus(10, 3);
            const expResult = calc.exponentiation(modResult, 2);
            expect(expResult).toBe(1);
        });
        test('should return correct result for square root followed by exponentiation', () => {
            const sqrtResult = calc.squareRoot(16);
            const expResult = calc.exponentiation(sqrtResult, 2);
            expect(expResult).toBe(16);
        });
    });
});