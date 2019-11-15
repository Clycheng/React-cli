import React, { Component } from 'react'
import { Button, Input, List } from 'antd';
export default class ReduxDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plaValue: "请输入",
            List: [
                'Racing car sprays burning fuel into crowd.',
                'Japanese princess to wed commoner.',
                'Australian walks 100km after outback crash.',
                'Man charged over missing wedding girl.',
                'Los Angeles battles huge wildfires.',
            ]
        }

    }
    render() {
        return (
            <div>
                <p>  <Input style={{ width: '50%' }} placeholder={this.state.plaValue} />
                    <Button type="primary">Primary</Button></p>
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