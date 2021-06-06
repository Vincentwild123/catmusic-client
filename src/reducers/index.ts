import { Types, ActionType } from "../actionType/index";

const handleCount = (state = 0, action: ActionType) => {
  switch (action.type) {
    case Types.INC_COUNT:
      return state + 1;
    case Types.DEC_COUNT:
      return state - 1;
    default:
      return state;
  }
};
const handleMsg = (state = "Welcome!", action: ActionType) => {
  switch (action.type) {
    case Types.SET_MSG:
      return (action.payload as any).msg;
    default:
      return state;
  }
};

const handleLogin = (state = false, action: ActionType) => {
  switch (action.type) {
    case Types.LOGIN:
      return true;
    default:
      return state;
  }
};
export type StateType = {
  count: number;
  msg: string;
  haveLogin: boolean;
};

const initialState: StateType = {
  count: 0,
  msg: "Welcome!",
  haveLogin: false,
};

const Controller = (state = initialState, action: ActionType) => {
  switch (action.type) {
    default:
      return {
        count: handleCount(state.count, action),
        msg: handleMsg(state.msg, action),
        haveLogin: handleLogin(state.haveLogin, action),
      };
  }
};
export default Controller;
