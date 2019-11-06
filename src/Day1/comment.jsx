import React,{Component} from 'react'
import "./index.css"


// List组件
class List extends Component{
    render(){
        let {List,deleteList} = this.props
        return(
            <div id = "list">
                <h4>评论专区</h4>
                <ul>
                    {
                        List.map((item,index)=>{
                            return (<li key={index}>
                                <p>{item.name}</p>
                                <p>{item.message}</p>
                                <button data-value={index} onClick = {deleteList}>删除</button>
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

// message组件

class Info extends Component{
    render(){
        let {handCommit,handChangeName,handChangeInfo} = this.props
        return(
            <div id = "infomessage">
              <p>用户名</p>
              <input onChange = {handChangeName}  type="text" />
              <p>评论内容</p>
              <textarea onChange = {handChangeInfo} name="" id="" cols="30" rows="10"></textarea>
              <button className = "commit"  onClick = {handCommit}>提交</button>
            </div>
        )
    }
}

// Comment 主组件

 class Comment extends Component{
    constructor(props){
        super(props)
        this.state = {
            msgs:{
                name:"123",
                message:"423",
            },
            List:[],
            PageDis:false
        }
        
    }
    handChangeName = (e)=>{
        let message = this.state.msgs.message
        this.setState({
            msgs:{
                name:e.target.value,
                message:message
            }
            
        })
    }
    handChangeInfo = (e)=>{
        let name = this.state.msgs.name
        this.setState({
            msgs:{
                name:name,
                message:e.target.value
            }
        })
    }
    handCommit = ()=>{
        let {msgs,List} = this.state
     
        List.push(msgs)
        this.setState({
            List
        })
    }
    deleteList = (e)=>{
        console.log()
        let {List} = this.state
        List.splice(e.target.getAttribute("data-value"),1)
        this.setState({
            List
        })
    }
    render(){
        let {msgs,Page,befroeChange} = this.props
        
        return(
            <div id = "comment" className = {Page === 0?"active":''}>
                <h1>React 评论</h1>
                <Info msg = {msgs} handCommit = {this.handCommit} handChangeName = {this.handChangeName} handChangeInfo = {this.handChangeInfo}/>
                <List List = {this.state.List} deleteList = {this.deleteList}/>
                <p><button onClick = {befroeChange} >返回</button></p>
            </div>
        )
    }
}
export default Comment
