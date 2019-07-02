import {UPDATE_CURRENT_OPTION} from '../constants'
const defaultOption = 1;
const updateOption = (state=defaultOption,action)=> {
    console.log('reducer',action)
    switch(action.type) {
        case UPDATE_CURRENT_OPTION: return action.data
        default: return state
    }
}
export default updateOption