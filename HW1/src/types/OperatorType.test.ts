import { detectOperatorType, BinaryOperatorType } from './OperatorType';

describe('Operator Type  cases', () => {
    it('/', () => {
        expect(detectOperatorType('/')).toEqual('divide');
    });

    it('*', () => {
        expect(detectOperatorType('*')).toEqual('multiply');
    });

    it('+', () => {
        expect(detectOperatorType('+')).toEqual('add');
    });

    it('-', () => {
        expect(detectOperatorType('-')).toEqual('substruct');
    });

    it('^', () => {
        expect(detectOperatorType('^')).toEqual('power');
    });

    it('!', () => {
        expect(detectOperatorType('!')).toEqual('factorial');
    });

    it('&', () => {
        expect(() => detectOperatorType('&')).toThrow(TypeError('Unrecognized operator.'));
    });
});
