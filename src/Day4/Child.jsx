import React,{Component} from 'react'

export default class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:[
                {
                    id:0,
                    content:"我是0的内容"
                },
                {
                    id:1,
                    content:"我是1的内容"
                },
                {
                    id:2,
                    content:"我是2的内容"
                },
                {
                    id:3,
                    content:"我是3的内容"
                }
            ]
        }
    }
    render(){
        let {id} = this.props.match.params
        let {message} = this.state
        let childmsg = message.find(item=> item.id === id*1)
        console.log(childmsg)
        return (
            <div>
                我是child,通过路由传参得到{childmsg.content}
            </div>
        )
    }
}