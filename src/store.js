import {createStore} from 'redux'
import reducesCon from './reducers'
console.log(reducesCon)
const store = createStore(reducesCon)
export default store