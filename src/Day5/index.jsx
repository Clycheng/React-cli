import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import Child from './Child'
export default class RouterLink extends Component{
    render(){
        return(
            <div>
                <a href="/routerLink/child">非路由链接跳转到child</a>
                <Link to='/routerLink/child'>路由链接跳转到child</Link>
                <div>
                <Route path='/routerLink/child' component = {Child}/>
                </div>
            </div>
        )
    }
}