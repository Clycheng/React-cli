import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studyList: [
        {
          Day: "第一天",
          case: "评论案例",
          name: "组件名"
        },
        {
          Day: "第一天",
          case: "评论案例",
          name: "组件名"
        }
        ,
        {
          Day: "第一天",
          case: "评论案例",
          name: "组件名"
        }
        ,
        {
          Day: "第一天",
          case: "评论案例",
          name: "组件名"
        }
        ,
        {
          Day: "第一天",
          case: "评论案例",
          name: "组件名"
        }
        ,
        {
          Day: "第一天",
          case: "评论案例",
          name: "组件名"
        }
      ]
    }
  }
  render() {
    let {studyList} = this.state
    return (
      <div id = "appWarp">
          <h1>React学习</h1>
          <ul>
            {studyList.map((item,index)=>{
                return <li className = "st-list" key={index} ><h4>{item.Day}</h4><p>{item.case}</p></li>
            })}
          </ul>
      </div>
    )
  }
}

export default App;
