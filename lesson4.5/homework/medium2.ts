// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

// eslint-disable-next-line @typescript-eslint/no-explicit-any

type FIXME<RC extends React.ComponentType<U>, U> = RC['defaultProps'];

// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME<React.ComponentType<T>, T> => {
  return component.defaultProps;
};
