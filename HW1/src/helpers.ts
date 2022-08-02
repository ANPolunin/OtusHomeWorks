import { binaryOperator } from './classes/binaryOperator';
import { numberOperator } from './classes/numberOperator';
import { unaryOperator } from './classes/unaryOperator';
import { Operand } from './types/Operand';
import { BinaryOperatorType, detectOperatorType, OperatorType } from './types/OperatorType';

/**
 * Функция очищает входную строку от неиспользуемых символов - пробелов, собак и номеров.
 * @param input Очищаемая строка.
 * @returns Выражение без пробелов и лишних символов.
 */
export const cleanExpression = (input: string): string => {
    let result: string = input;
    const replaceChars = [' ', '@', '№', '^\\+'];

    replaceChars.map<void>((char) => {
        const replacer = new RegExp(char, 'g');
        result = result.replace(replacer, '');
        //console.log(char);
    });

    return result;
};

export const checkAllowedChars = (input: string): boolean => {
    if (!/^[-0-9(]{1}[-0-9+*/^)()!]*$/.test(input)) {
        throw TypeError('Unexpected string in expression.');
    }
    if (/\*\*(?=\d)/.test(input)) {
        throw TypeError('Unexpected string in expression. Digits gose after qudrant.');
    }
    return true;
};

function purifyExpression(input: string): string {
    let result: string = input.replace(/\*\*/g, '^2');
    while (/--/g.test(result) || /\+\+/g.test(result) || /\+-/g.test(result) || /-\+/g.test(result)) {
        result = result.replace(/--/g, '+');
        result = result.replace(/\+\+/g, '+');
        result = result.replace(/\+-/g, '-');
        result = result.replace(/-\+/g, '-');
    }

    return cleanExpression(result);
}

export const parce2Operator = (input: string, invertOp = false): Operand => {
    let pureExpression = purifyExpression(input);
    if (pureExpression[0] === '-') {
        pureExpression = '0' + pureExpression;
    }

    console.info('Pured expr: ' + pureExpression);

    const regExBrackets = new RegExp(/\([0-9+\-*/!^]*\)/);

    let execResult: RegExpExecArray | null;
    while ((execResult = regExBrackets.exec(pureExpression)) !== null) {
        // console.log(`ExecResult ${execResult}`);

        if (execResult) {
            execResult.forEach((group) => {
                //console.log(`Group: ${group}`);

                const expr = group.substring(1, group.length - 1);
                //console.log(`Expr: ${expr}`);

                const val = parce2Operator(expr).Evaluate();
                //console.log(`Value: ${val}`);

                pureExpression = pureExpression.replace(group, val.toString());
                //console.log(`New pureExp: ${pureExpression}`);
            });
        } else {
            break;
        }
    }

    pureExpression = purifyExpression(pureExpression);

    // Проверить, является ли операнд числом:
    const isNum = /^-?[0-9.]*$/.test(pureExpression);

    if (!isNum) {
        //console.log(`Выражение [${pureExpression}] не является числом.`);

        // Найти первое вхождение низшего оператора
        // Проверка на сложение и вычитание
        let splicePosition = pureExpression.search(/(?<=[\w!])[-+]\w/i);

        if (splicePosition === -1) {
            // Проверка на умножение и деление
            splicePosition = pureExpression.search(/(?<=[\w!])[*/]{1}/i);

            if (splicePosition === -1) {
                // Проверка на возведение в степень
                splicePosition = pureExpression.search(/(?<=[\w!])[\^]{1}/i);

                if (splicePosition === -1) {
                    splicePosition = pureExpression.search(/(?<=\w)[!]{1}/i);
                }
            }
        }

        if (splicePosition >= 0) {
            let operator = pureExpression.substring(splicePosition, splicePosition + 1);

            if (invertOp) {
                switch (operator) {
                    case '+':
                        operator = '-';
                        break;
                    case '-':
                        operator = '+';
                        break;
                    default:
                        break;
                }

                //console.log('Меняем знак!');
            }

            const isMinus = operator === '-';

            //console.log(`Operator ${operator}`);

            const left: Operand = parce2Operator(pureExpression.substring(0, splicePosition));
            const right: Operand = parce2Operator(
                pureExpression.substring(splicePosition + 1),
                (isMinus && !invertOp) || (invertOp && !isMinus),
            );
            const operation: OperatorType = detectOperatorType(operator);

            const result =
                operator === '!'
                    ? new unaryOperator(left, 'factorial')
                    : new binaryOperator(left, operation as BinaryOperatorType, right);

            //console.log(`${left.Evaluate()} ${operation} ${right.Evaluate()} = ${result.Evaluate()}`);

            return result;
        } else {
            throw TypeError('Unexpected string in expression.');
        }
    } else {
        const numVal = Number.parseFloat(pureExpression);

        //console.info('Parced num: ' + numVal);

        return new numberOperator(numVal);
    }
};
