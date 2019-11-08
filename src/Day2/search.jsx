import React, {Component } from "react";
import axios from 'axios'
class Search extends Component {
    constructor(props){
        super(props)
        console.log(props)
      let {handChangeSearchMsg} = this.props
        this.state = {
            searchVal:'',
            List:[],
            handChangeSearchMsg

        }
    }
    handChange = (e)=>{
        this.setState({
            searchVal:e.target.value,
            url:'https://api.github.com/search/repositories?q='+e.target.value+'&sort=stars'
        })
    }
    handSend = (e)=>{
        let {url} = this.state
        axios.get(url)
        .then((res)=>{
            let {items} = res.data
            this.setState({
                List:items
            })
        }).then(()=>{
            this.props.handChangeSearchMsg(this.state.List)
        })
    }
    render(){
        return(
            <div>
                <h2>Search Github users</h2>
                <input onChange = {this.handChange} ref = "searchVal" type="text" value = {this.state.searchVal} />
                <button  onClick = {this.handSend} >搜索</button>
            </div>
        )
    }
}
export default Search