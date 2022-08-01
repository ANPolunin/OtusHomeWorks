// eslint-disable-next-line @typescript-eslint/no-explicit-any

type Increase<A, ACC extends Array<number> = []> = ACC['length'] extends A 
        ? [...ACC, 0]['length'] 
        : Increase<A, [...ACC, 0]>;

type Decrease< A, ACC extends Array<number> = [] > = [...ACC, 0]['length'] extends A     
        ? ACC['length']   
        : Decrease<A, [...ACC, 0]>;

type Add2<A, B> = A extends 0 ? B : Add<Decrease<A>, Increase<B>>;
type Sub<A, B> = B extends 0 ? A : Sub<Decrease<A>, Decrease<B>>;

type FIXME<OP extends '+'|'-', A, B> = OP extends '+' ? Add2<A, B> : Sub<A, B>;

// Это сложное (если не супер сложное) задание
// Задача состоит в том что написать калькулято для натуральных чисел, но только на типах!
// Ниже приведена заготовка
// Хочется поддержки сложения и вычитания, если хочется еще челленджа, то деление и умножение
// Из-за ограничений глубины вычислений поддержать все натуральные числа не получится, это нормально
type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

type Add<A, B> = FIXME<"+",A,B>;
type Subtract<A, B> = FIXME<"-",A,B>;

export type OnePlusOneTest = Equals<Add<1, 1>, 2>;
export type TwoMinusOneTest = Equals<Subtract<2, 1>, 1>;

//-----------------------------------------------------------------
