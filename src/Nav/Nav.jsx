import React, {Component} from 'react';

export default  class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg:"我是 nav"
        }
    }
    render(){
        return(
            <div>{this.state.msg}</div>
        )
    }
}