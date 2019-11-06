import React, { Component } from 'react';
import Comment from  './Day1/comment'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studyList: [
        {
          Day: "第一天",
          case: "评论案例",
          name: "组件名"
        }
      ],
      Page:-1,
      disWarp:false
    }
   
  
  }
  handChangePage = (e)=>{
    // e.stopPropagation();
    // let {Page} = this.state
    // Page = e.target.getAttribute("data-value")
    this.setState({
      Page:e,
      disWarp:true
    })
    // console.log(this.state.Page)
  }
  // 返回按钮事件
  befroeChange = ()=>{
    this.setState({
      Page:-1,
      disWarp:false
    })
  }
  render() {
    let {studyList} = this.state
    return (
      <div id = "appWarp">
          <h1>React学习</h1>
          
          <ul className = {this.state.disWarp?'warp-active':""}>
            {studyList.map((item,index)=>{
                return <li onClick = {()=>this.handChangePage(index)} data-value={index} className = "st-list" key={index} ><h4 data-value={index}>{item.Day}</h4><p data-value={index}>{item.case}</p></li>
            })}
          </ul> 
          <Comment befroeChange = {this.befroeChange}  Page = {this.state.Page}/>
      </div>
    )
  }
}

export default App;
