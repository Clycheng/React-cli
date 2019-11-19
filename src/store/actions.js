export const add = (e)=>{
    return {
        type:"add",
        data:e
    }
}
export const del = (state)=>{
    return {
        type:"del",
        data:state
    }
}