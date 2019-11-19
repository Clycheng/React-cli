import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import store from './store/store'
import {Provider} from 'react-redux'
 
ReactDOM.render(
    <Provider store = {store}><BrowserRouter><App  /></BrowserRouter></Provider>
    
    , document.getElementById('root'));

// const age = (state = { height:120,age:22}, action) => {
//     switch (action.type) {
//         case 'add':
//             return {
//               height:state.height+1,...state
//             }
//         case 'reduce':
//             return state - 1
//         default:
//             return state

//     }

// }
// const Store = createStore(age)
// Store.dispatch({type:'add'})
// console.log(Store.getState())
// Store.dispatch({type:'add'})
// console.log()
// Store.dispatch({type:'reduce'})
// console.log(Store.getState())
// Store.dispatch({type:'reduce'})
// console.log(Store.getState())

