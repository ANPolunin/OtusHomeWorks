import * as processor from './CalcProcessor';

describe('CalcProcessor  cases', () => {
    it('1 + 32', () => {
        expect(processor.add(1, 32)).toEqual(33);
    });

    it('11 /1', () => {
        expect(processor.divide(11, 1)).toEqual(11);
    });

    it('11 / 0', () => {
        expect(() => processor.divide(11, 0)).toThrow(TypeError('Division by 0 (zero).'));
    });

    it('1 + Nan', () => {
        expect(() => processor.add(1, NaN)).toThrow(TypeError('Adding error. Second argument is NaN.'));
    });

    it(' Nan + 1', () => {
        expect(() => processor.add(NaN, 1)).toThrow(TypeError('Adding error. First argument is NaN.'));
    });

    it('1 - Nan', () => {
        expect(() => processor.substruct(1, NaN)).toThrow(TypeError('Substructing error. Second argument is NaN.'));
    });

    it(' Nan - 1', () => {
        expect(() => processor.substruct(NaN, 1)).toThrow(TypeError('Substructing error. First argument is NaN.'));
    });

    it('11-1', () => {
        expect(processor.substruct(11, 1)).toEqual(10);
    });

    it(' Nan * 1', () => {
        expect(() => processor.multiply(NaN, 1)).toThrow(TypeError('Multipling error. First argument is NaN.'));
    });

    it('1 * Nan', () => {
        expect(() => processor.multiply(1, NaN)).toThrow(TypeError('Multipling error. Second argument is NaN.'));
    });

    it('11*1', () => {
        expect(processor.multiply(11, 1)).toEqual(11);
    });

    it(' Nan / 1', () => {
        expect(() => processor.divide(NaN, 1)).toThrow(TypeError('Dividing error. Divident is NaN.'));
    });

    it('1 / Nan', () => {
        expect(() => processor.divide(1, NaN)).toThrow(TypeError('Dividing error. Divider is NaN.'));
    });

    it('11/1', () => {
        expect(processor.divide(11, 1)).toEqual(11);
    });

    it(' Nan ^ 1', () => {
        expect(() => processor.power(NaN, 1)).toThrow(TypeError('Powering error. Base is NaN.'));
    });

    it('1 ^ Nan', () => {
        expect(() => processor.power(1, NaN)).toThrow(TypeError('Powering error. Power is NaN.'));
    });

    it('11^2', () => {
        expect(processor.power(11, 2)).toEqual(121);
    });

    it('11!', () => {
        expect(processor.factor(6)).toEqual(720);
    });

    it('0!', () => {
        expect(processor.factor(0)).toEqual(0);
    });

    it('Nan!', () => {
        expect(() => processor.factor(NaN)).toThrow(TypeError('Factoring error. Base is NaN.'));
    });

    it('(-5)!', () => {
        expect(() => processor.factor(-5)).toThrow(
            TypeError('Factoring error. Base must be the positive integer number.'),
        );
    });

    it('2.5!', () => {
        expect(() => processor.factor(2.5)).toThrow(
            TypeError('Factoring error. Base must be the positive integer number.'),
        );
    });

    it('171!', () => {
        expect(() => processor.factor(171)).toThrow(TypeError('Factoring error. Base must be less then or equal 170.'));
    });
});
