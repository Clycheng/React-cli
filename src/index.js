import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { createStore } from 'redux'

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>
    , document.getElementById('root'));

const age = (state = 20, action) => {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'reduce':
            return state - 1
        default:
            return state

    }

}
const Store = createStore(age)
Store.dispatch({type:'add'})
console.log(Store.getState())
Store.dispatch({type:'reduce'})
console.log(Store.getState())
Store.dispatch({type:'reduce'})
console.log(Store.getState())