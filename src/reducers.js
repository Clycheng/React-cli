var state = {
    // reduxdemo组件的数据
        reduxDemo:{
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
export function reducesCon(state,action){
    switch(action.type){
        case 'add':
            return{
                ...state,List:state.List.push(action.data)
            }
        case 'del':
            return{
                ...state,List:state.List.splice(action.data*1,1)
            }
        default:
            return{
                ...state
            }
    }
}
