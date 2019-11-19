import states from './state'
function reducesCon(state = states,action){
    switch(action.type){
        case 'add':
            return{
                reduxDemo:{
                    List: state.reduxDemo.List.push(action.data),
                    plaValue:action.data
                },
                ...state,
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
export default  reducesCon