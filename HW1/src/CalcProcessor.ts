/**
 * Функция складывает 2 числа.
 * @param first Первое слагаемое.
 * @param second Второе слагаемое.
 * @returns Сумма переданных чисел.
 */
export const add = (first: number, second: number): number => {
    if (isNaN(first)) {
        throw TypeError('Adding error. First argument is NaN.');
    }

    if (isNaN(second)) {
        throw TypeError('Adding error. Second argument is NaN.');
    }

    return first + second;
};

/**
 * Функция вычитает одно число из другого.
 * @param first Уменьшаемое.
 * @param second Вычитаемое.
 * @returns Частное.
 */
export const substruct = (first: number, second: number): number => {
    if (isNaN(first)) {
        throw TypeError('Substructing error. First argument is NaN.');
    }

    if (isNaN(second)) {
        throw TypeError('Substructing error. Second argument is NaN.');
    }

    return first - second;
};

/**
 * Функция перемножает два числа.
 * @param first первое умножаемое.
 * @param second первое умножаемое.
 * @returns число, являющееся произведением двух переданных чисел.
 */
export const multiply = (first: number, second: number): number => {
    if (isNaN(first)) {
        throw TypeError('Multipling error. First argument is NaN.');
    }

    if (isNaN(second)) {
        throw TypeError('Multipling error. Second argument is NaN.');
    }

    return first * second;
};

/**
 * Функция производит деление одного числа нв другое.
 * @param divident делимое.
 * @param divider делитель.
 * @returns число, результат от деления.
 */
export const divide = (divident: number, divider: number): number => {
    if (isNaN(divident)) {
        throw TypeError('Dividing error. Divident is NaN.');
    }

    if (isNaN(divider)) {
        throw TypeError('Dividing error. Divider is NaN.');
    }

    if (divider === 0) {
        throw TypeError('Division by 0 (zero).');
    }

    return divident / divider;
};

/**
 * Возведение числа `base` в указанную степень `power`.
 * @param base основание  - число, возводимое в степень.
 * @param power степень числа.
 * @returns Число, являющееся результатом возведения в степень.
 */
export const power = (base: number, power: number): number => {
    if (isNaN(base)) {
        throw TypeError('Powering error. Base is NaN.');
    }

    if (isNaN(power)) {
        throw TypeError('Powering error. Power is NaN.');
    }

    return Math.pow(base, power);
};

/**
 * Факториал числа.
 * @param base основание факториала - целое не отрицательное число.
 * @returns Произведение всех чисел от 1 до `base`
 */
export const factor = (base: number): number => {
    let result = 1;

    if (isNaN(base)) {
        throw TypeError('Factoring error. Base is NaN.');
    }

    if (base < 0) {
        throw TypeError('Factoring error. Base must be the positive integer number.');
    }

    if (base % 1 > 0) {
        throw TypeError('Factoring error. Base must be the positive integer number.');
    }

    if (base > 170) {
        throw TypeError('Factoring error. Base must be less then or equal 170.');
    }

    if (base === 0) {
        return 0;
    }

    for (let n = 1; n <= base; n++) {
        result = result * n;
    }

    return result;
};
