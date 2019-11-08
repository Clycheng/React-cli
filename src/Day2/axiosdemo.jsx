import React,{Component } from "react";
// import {axios} from 'axios'
import './index.css'
import Search from './search'
import List from './list'
// 主组件

class AxiosDemo extends  Component{
    constructor(props){
        super(props)
        this.state = {
            searchMsg:'',
            url:'https://api.github.com/search/repositories?q=re&stars',
            userList:[]
        }
        
    }
    handChangeSearchMsg = (e)=>{
        this.setState({
            userList:e
        })
    }
    render(){
        let {Page,befroeChange} = this.props
        
       return (
            <div id = "search" className = {Page === 1?'active':''}>
                <Search state = {this.state} handChangeSearchMsg = {this.handChangeSearchMsg} />
                <List List = {this.state.userList}/>
                <p><button onClick = {befroeChange} >返回</button></p>
            </div>
       )
        // let {Page,befroeChange} = this.props
        
    }
}
export default AxiosDemo