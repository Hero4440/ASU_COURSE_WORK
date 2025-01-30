const SimpleCalculations = require('../simpleCalculations');
describe('SimpleCalculations', () => {
    let calc;
    beforeEach(() => {
        calc = new SimpleCalculations();
    });
    describe('addition', () => {
        it('should return 5 for addition of 2 and 3', () => {
            expect(calc.addition(2, 3)).toBe(5);
        });

        it('should return -1 for addition of -2 and 1', () => {
            expect(calc.addition(-2, 1)).toBe(-1);
        });

        it('should return 0 for addition of 0 and 0', () => {
            expect(calc.addition(0, 0)).toBe(0);
        });
    });
    describe('subtraction', () => {
        it('should return -1 for subtraction of 2 and 3', () => {
            expect(calc.subtraction(2, 3)).toBe(-1);
        });
        it('should return -3 for subtraction of -2 and 1', () => {
            expect(calc.subtraction(-2, 1)).toBe(-3);
        });
        it('should return 0 for subtraction of 0 and 0', () => {
            expect(calc.subtraction(0, 0)).toBe(0);
        });
    });
    describe('multiplication', () => {
        it('should return 6 for multiplication of 2 and 3', () => {
            expect(calc.multiplication(2, 3)).toBe(6);
        });
        it('should return -2 for multiplication of -2 and 1', () => {
            expect(calc.multiplication(-2, 1)).toBe(-2);
        });
        it('should return 0 for multiplication of 0 and 3', () => {
            expect(calc.multiplication(0, 3)).toBe(0);
        });
    });
    describe('division', () => {
        it('should return 2 for division of 6 by 3', () => {
            expect(calc.division(6, 3)).toBe(2);
        });
        it('should return -2 for division of -6 by 3', () => {
            expect(calc.division(-6, 3)).toBe(-2);
        });
        it('should return 0 for division of 0 by 3', () => {
            expect(calc.division(0, 3)).toBe(0);
        });
        it('should throw an error when dividing by zero', () => {
            expect(() => calc.division(6, 0)).toThrow("Cannot divide by zero!");
        });
    });
});
