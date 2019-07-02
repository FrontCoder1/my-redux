import {UPDATE_NAME,UPDATE_AGE,GET_USER} from '../constants'

const defaultUser = {
}

const updateUSer = (state=defaultUser,action) => {
    switch(action.type) {
        case UPDATE_NAME: return {...state,name:action.data}
        case UPDATE_AGE: return {...state,age:action.data}
        case GET_USER: return action.data
        default: return state
    }
}

export default updateUSer