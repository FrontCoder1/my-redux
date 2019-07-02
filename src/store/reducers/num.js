import {ADD_NUM, DE_NUM} from '../constants'
const defaultNum = 20;
const updateNum = (state=defaultNum,action) => {
    switch(action.type) {
        case ADD_NUM: return +(state+action.data*1)
        case DE_NUM: return state-action.data
        default: return state
    }
}

export default updateNum