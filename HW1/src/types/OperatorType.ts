export type UnaryOperatorType = 'factorial' | 'minus';
export type BinaryOperatorType = 'add' | 'substruct' | 'multiply' | 'divide' | 'power';
export type OperatorType = UnaryOperatorType | BinaryOperatorType;

export function detectOperatorType(opChar: string): OperatorType {
    switch (opChar) {
        case '+':
            return 'add';
        case '-':
            return 'substruct';
        case '*':
            return 'multiply';
        case '/':
            return 'divide';
        case '^':
            return 'power';
        case '!':
            return 'factorial';
        default:
            throw TypeError('Unrecognized operator.');
    }
}
