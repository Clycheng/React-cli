import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import Child from './Child'
export default class RouterProps  extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg:[
                {
                    id:0,
                    headName:"我是0"
                },
                {
                    id:1,
                    headName:"我是1"
                }
                ,
                {
                    id:2,
                    headName:"我是2"
                }
                ,
                {
                    id:3,
                    headName:"我是3"
                }
                
            ]
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.msg.map((item,index)=>{
                        return(
                            <p key = {index}><Link  to={'/routerprops/child/'+item.id}>跳转到子组件 并且带id</Link></p>
                           
                        )
                    })}
                </ul>
                    <Route path= '/routerprops/child/:id' component = {Child}/>
            </div>
        )
    }
}