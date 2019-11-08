import React,{Component} from 'react'
import './index.css'
export default  class List extends Component{
    render(){
        let {List} = this.props
        console.log(List)
        return(
            <div>
                <ul>
                    {
                          List.map((item,index)=>{
                            return <li key = {index}> <img src={item.owner.avatar_url} alt=""/></li>
                            })
                    }
                </ul>
            </div>
        )
    }
}