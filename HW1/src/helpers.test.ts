import { binaryOperator } from './classes/binaryOperator';
import { numberOperator } from './classes/numberOperator';
import { cleanExpression, checkAllowedChars, parce2Operator } from './helpers';
import { BinaryOperatorType, detectOperatorType } from './types/OperatorType';

describe('Cleaner  cases', () => {
    it('1 + 32', () => {
        expect(cleanExpression('1 + 32')).toEqual('1+32');
    });

    it('11 + 3 @* 22', () => {
        expect(cleanExpression('11 + 3 @* 22')).toEqual('11+3*22');
    });
});

describe('checkAllowedChars cases', () => {
    it('1 !F33 - 2', () => {
        expect(() => checkAllowedChars('1 F! 33 - 2')).toThrow(TypeError('Unexpected string in expression.'));
    });
    it('1 ! 33 - 2', () => {
        expect(checkAllowedChars(cleanExpression('1 ! 33 - 2'))).toEqual(true);
    });
    it('1 ! 33 ** 2 - 2', () => {
        expect(() => checkAllowedChars(cleanExpression('1 ! 33 ** 2 - 2'))).toThrow(
            TypeError('Unexpected string in expression. Digits gose after qudrant.'),
        );
    });
});

describe('parce2Operator cases', () => {
    it('1++--+----++2*3-(1+5)', () => {
        expect(parce2Operator('1++--+----++2*3-(1+5)')).toEqual(
            new binaryOperator(
                new numberOperator(1),
                detectOperatorType('+') as BinaryOperatorType,
                new binaryOperator(
                    parce2Operator('2*3'),
                    detectOperatorType('-') as BinaryOperatorType,
                    parce2Operator('6'),
                ),
            ),
        );
    });

    it('1++--+----++2*3', () => {
        expect(parce2Operator('1++--+----++2*3')).toEqual(
            new binaryOperator(
                new numberOperator(1),
                detectOperatorType('+') as BinaryOperatorType,
                parce2Operator('2*3'),
            ),
        );
    });

    it('1+2*3-(5/6)-5**+3!', () => {
        expect(parce2Operator('1+2*3-(6/5)-5**+3!').Evaluate()).toEqual(-13.2);
    });
});
