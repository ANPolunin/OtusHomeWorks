// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = (Excl1 | Excl2 )[];

type Excl1 = Exclude<OrderState, "buyingSupplies" | "producing">;
type Excl2 = Exclude<OrderState, Excl1>;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];


// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );
