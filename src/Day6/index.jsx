import React, { Component } from 'react'
import { Button, Input, List } from 'antd';
import {add, del} from '../store/actions'
import { connect } from 'react-redux'
 class ReduxDemo extends Component {
    constructor(props) {
        super(props)
        const {data} = this.props
     
        this.state = {
            ...data.reduxDemo,
        }
        // console.log (add,del)
    }
    handChange = (e)=>{
        this.setState({
            plaValue:e.target.value
        })
    }
    render() {
        const {add,data} = this.props
        console.log(data)
        return (
            <div>
                <p>  <Input onChange = {this.handChange} style={{ width: '50%' }} placeholder={this.state.plaValue} />
                    <Button onClick = {()=>{add(this.state.plaValue)}} type="primary">Primary</Button></p>
                <List
                    size="large"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.List}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default connect(state=>{
    return {data:state}
},{add,del})(ReduxDemo)