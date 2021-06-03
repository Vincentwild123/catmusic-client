import * as Types from '../actionType/index'
const handleCount = (state = 0, action) => {
    switch (action.type) {
        case Types.INC_COUNT:
            return state + 1;
        case Types.DEC_COUNT:
            return state - 1;
        default:
            return state;
    }
}
const handleMsg = (state = 'Welcome!', action) => {
    switch (action.type) {
        case Types.SET_MSG:
            return action.msg;
        default:
            return state;
    }
}

const initialState = {
    count: 0,
    msg: 'Welcome!'
}


const Controller = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {
                count: handleCount(state.count, action),
                    msg: handleMsg(state.msg, action)
            }
    }
}
export default Controller;