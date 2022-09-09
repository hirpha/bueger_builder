import * as actionType from '../actions/actionTypes'


const initialState ={
    token:null,
    userId:null,
    error:null,
    loading:false,
    orderPurchase:false
}

const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionType.AUTH_START:
            return {
                ...state,
                loading:true
            }
        case actionType.AUTH_SUCCESS:
            return {
                ...state,
                token:action.token,
                userId:action.userId,
                loading:false
            }
        case actionType.AUTH_FAIL:
            return {
                ...state,
                loading:false,
                error:action.error
            }
        case actionType.AUTH_LOGOUT:
            return {
                ...state,
                loading:false,
                token:null,
                id:null,
                orderPurchase:false
            }
        case actionType.ORDER_TO_PURCHASE:
            return {
                ...state,
                orderPurchase:true
            }
        default:
            return state    
    }
   
}


export default authReducer