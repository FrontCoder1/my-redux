import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import thunk from 'react-thunk'

export const store = createStore(reducers, applyMiddleware(thunk))

