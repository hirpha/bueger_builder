import * as actionType from "../actions/actionTypes"

const initialState=  {
    orders:[],
    loading:false,
    error:null,
    purchased:false
}
const orderReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionType.PURCHSE_BURGER_START:
            return {
                ...state,
                    loading:true,
                    purchased:false
            }
        case actionType.PURCHSE_BURGER_SECCUSS:
            const orderData = {
                ... action.orderData,
                id:action.id
            }
            return {
                ...state,
                    orders:state.orders.concat(orderData),
                    loading:false,
                    purchased:true
            }
        case actionType.PURCHSE_BURGER_FAIL:
            return {
                ...state,
                    error:action.error,
                    loading:false,
                    purchased:false
            }
        case actionType.FETCH_ORDER_START:
            return {
                ...state,
                    loading:true,
            }
        case actionType.FETCH_ORDER_SECCUSS:
            return {
                ...state,
                    orders:action.orders,
                    loading:false
            }
        case actionType.FETCH_ORDER_FAIL:
            return {
                ...state,
                    loading:false,
                    error:action.error
            }
            default:
                return state
    }
}

export default orderReducer