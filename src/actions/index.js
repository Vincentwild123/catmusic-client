import * as Types from '../actionType'


export const incCount = () => {
    return {
        type: Types.INC_COUNT,
    }
}
export const decCount = () => {
    return {
        type: Types.DEC_COUNT,
    }
}
export const setMsg = (msg) => {
    return {
        type: Types.SET_MSG,
        msg
    }
}