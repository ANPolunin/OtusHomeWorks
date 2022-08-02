import { Operand } from '../types/Operand';
import { BinaryOperatorType } from '../types/OperatorType';
import * as Calc from '../CalcProcessor';

export class binaryOperator {
    public leftOperand!: Operand;
    public rightOperand!: Operand;
    public Operator!: BinaryOperatorType;

    /**
     * Инициализирует оператор для последующего обращения к нему.
     */
    constructor(left: Operand, op: BinaryOperatorType, right: Operand) {
        this.leftOperand = left;
        this.rightOperand = right;
        this.Operator = op;
    }

    public Evaluate(): number {
        let result: number = 0;
        let left: number = this.leftOperand.Evaluate();
        let right: number = this.rightOperand.Evaluate();

        switch (this.Operator) {
            case 'add':
                result = Calc.add(left, right);
                break;
            case 'divide':
                result = Calc.divide(left, right);
                break;
            case 'multiply':
                result = Calc.multiply(left, right);
                break;
            case 'power':
                result = Calc.power(left, right);
                break;
            case 'substruct':
                result = Calc.substruct(left, right);
                break;
        }

        return result;
    }
}
