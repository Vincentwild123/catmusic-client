const INC_COUNT: Symbol = Symbol("INC_COUNT");
const DEC_COUNT: Symbol = Symbol("DEC_COUNT");
const SET_MSG: Symbol = Symbol("SET_MSG");
const LOGIN: Symbol = Symbol("LOGIN");
export type ActionType = {
  type: Symbol;
  payload?: Object;
};
export const Types = {
  INC_COUNT,
  DEC_COUNT,
  SET_MSG,
  LOGIN,
};
