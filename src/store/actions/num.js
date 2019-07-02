import {ADD_NUM, DE_NUM} from '../constants'
export const addNum = (val)=>({type:ADD_NUM,data:val});
export const deNum = (val) => ({type:DE_NUM,data:val});
