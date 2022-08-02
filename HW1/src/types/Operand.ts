import { binaryOperator } from '../classes/binaryOperator';
import { numberOperator } from '../classes/numberOperator';
import { unaryOperator } from '../classes/unaryOperator';

export type Operand = unaryOperator | binaryOperator | numberOperator;
