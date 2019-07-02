import {UPDATE_CURRENT_OPTION} from '../constants'
export const updateOption = (option) => {
    return {type: UPDATE_CURRENT_OPTION, data: option}
}