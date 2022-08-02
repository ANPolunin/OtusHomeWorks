import { OperatorType, UnaryOperatorType } from '../types/OperatorType';
import { Operand } from '../types/Operand';
import * as Calc from '../CalcProcessor';

export class unaryOperator {
    public operand!: Operand;
    public Operator!: UnaryOperatorType;

    /**
     * Инициализирует оператор для последующего обращения к нему.
     */
    constructor(operand: Operand, op: UnaryOperatorType) {
        this.operand = operand;
        this.Operator = op;
    }

    public Evaluate(): number {
        let result: number = 0;
        let op: number = this.operand.Evaluate();
        switch (this.Operator) {
            case 'factorial':
                result = Calc.factor(op);
                break;
            case 'minus':
                result = op * -1;
                break;
        }

        return result;
    }
}
