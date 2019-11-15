import React, { Component } from 'react';
import RouterDemo from './Day3/head'
import Comment from  './Day1/comment'
import AxiosDemo from './Day2/axiosdemo'
import Routerprops from './Day4/index'
import RouterLink from './Day5/index'
import ReduxDemo from './Day6/index'
import {NavLink,Switch,Route} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studyList: [
        {
          Day: "第一天",
          case: "评论案例",
          name: "/comment"
        },
        {
          Day: "第二天",
          case: "搜索案例",
          name: "/search"
        },
        {
          Day: "第三天",
          case: "路由案例",
          name: "/router"
        },
        {
          Day: "第四天",
          case: "路由传参",
          name: "/routerprops"
        },
        {
          Day: "第五天",
          case: "路由链接与非路由链接的区别",
          name: "/routerLink"
        },
        {
          Day: "第六天",
          case: "ReduxDemo",
          name: "/ReduxDemo"
        }
      ],
    }
   
  
  }
  render() {
    let {studyList} = this.state
    return (
      <div id = "appWarp">
          <h1>React学习</h1>
          
          <ul  id = 'List-warp'>
            {studyList.map((item,index)=>{
                return <li  className = "st-list" key={index} >
              <NavLink to ={item.name}>{item.Day}<p>{item.case}</p></NavLink>
                </li>
            })}
          </ul> 
          <div id = "route-warp">
          <Switch>
              <Route path='/comment' component ={Comment}/>
              <Route path='/search' component ={AxiosDemo}/>
              <Route path='/router' component ={RouterDemo}/>
              <Route path='/routerprops' component ={Routerprops}/>
              <Route path = '/routerLink' component = {RouterLink}/>
              <Route path = '/ReduxDemo' component = {ReduxDemo}/>
          </Switch>
          </div>
       
            
      </div>
    )
  }
}

export default App;
