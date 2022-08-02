import { createInterface } from 'readline';
import * as Calc from './CalcProcessor';
import * as helper from './helpers';
import { Operand } from './types/Operand';

type resolves = null | 'exit';

const ioEngine = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (): Promise<resolves> =>
    new Promise((resolve, reject) => {
        ioEngine.question('> ', (expression: string) => {
            if (expression.toLocaleLowerCase() === 'exit') {
                resolve('exit');
            } else if (expression.toLocaleLowerCase() === 'fact') {
                const result = Calc.factor(170);

                if (result) {
                    console.log(`Result: ${result}`);
                }

                resolve(null);
            } else {
                try {
                    let result = 0;

                    const cleanedSting = helper.cleanExpression(expression);
                    helper.checkAllowedChars(cleanedSting);

                    // console.log(cleanedSting);

                    const operand: Operand = helper.parce2Operator(cleanedSting);
                    result = operand.Evaluate();

                    if (result) {
                        console.log(`Result: ${result}`);
                    }

                    resolve(null);
                } catch (ex) {
                    const e: Error = ex as Error;
                    reject(e.message);
                }
            }
        });
    });

async function processor(): Promise<void> {
    let result: resolves = null;

    while (result != 'exit') {
        try {
            result = await question();
        } catch (er) {
            console.error(er);
        }
    }
}

console.clear();
console.log('*****************************************************');
console.log('* This program is simple Calc.                      *');
console.log('* Allowed operations: adding (-), substructing (-), *');
console.log('* mltipling (*), dividing (/), powering (^),        *');
console.log('* quadrating (x**), factorial (x!)                  *');
console.log('*                                                   *');
console.log('* Type `exit` for quit...                           *');
console.log('*****************************************************');

console.log('Type your expression...');

processor().then(() => {
    console.clear();
    process.exit();
});
