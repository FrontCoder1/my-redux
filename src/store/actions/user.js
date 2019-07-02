import {UPDATE_NAME,UPDATE_AGE,GET_USER} from '../constants'
export const updateName = (name) => ({type:UPDATE_NAME,data:name})
export const updateAge = (age) => ({type: UPDATE_AGE,data:age})
const getUser = (user) => ({type: GET_USER,data:user})

export const recerverUSer = (id) => {
    return dispatch=> {
        setTimeout(()=>{
            dispatch(getUser({
                name: "peng",
                age:12
            }))
        },1000)
    }
}