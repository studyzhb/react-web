const createStore=(reducer)=>{
    let state;
    let listeners=[];
    
    const getState=()=>state;

    const dispatch=(action)=>{
        state=reducer(state,action)
        listeners.forEach(listener=>listener())
    }

    const subscribe=(listener)=>{
        listeners.push(listener)
        return ()=>{
            listeners=listeners.filter(l=>l!==listener)
        } 
    }

    dispatch({})

    return {getState,dispatch,subscribe}

}

const chatReducer=(state=defaultState,action={})=>{
    const {type,payload}=action;
    switch(type){
        case ADD_CHAT:
            return Object.assign({},state,{
                chatLog:state.chatLog.concat(payload)
            })
        case CHANGE_STATUS:
            return Object.assign({},state,{
                statusMessage:payload
            })
        case CHANGE_USERNAME:
            return Object.assign({},state,{
                userName:payload
            })
        default:return state
    }
}








