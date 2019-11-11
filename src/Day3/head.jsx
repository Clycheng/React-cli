import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import About from './about'
import List from './List'
import './index.css'

export default class Head extends Component{
    render(){
        return(
            <div>
                <h1>This is a head</h1>
                <ul>
                    <li><NavLink activeClassName = 'active' to = '/router/about'>跳转到about</NavLink></li>
                    <li><NavLink to = '/router/list'>跳转到List</NavLink></li>
                </ul>
                <div>
                    <Switch>
                    <Route path="/router/about" component = {About}></Route>
                    <Route path="/router/list" component = {List}></Route>
                     <Redirect to = '/router/about'/>
                    </Switch>
                  
                </div>
            </div>
        )
    }
}