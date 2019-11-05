import React from 'react';
import Nav from './Nav/Nav'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      msg:"我是父组件"
    }
  }
  render(){
    return (
      <div>
        {this.state.msg}
        <Nav/>
      </div>
    )
  }
}

export default App;
