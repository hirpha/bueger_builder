import * as actionType from "../actions/actionTypes"
import axios  from "../../axios-order"

export const purchaseBurgerSuccess = (id, orderData) =>{
    return {
        type:actionType.PURCHSE_BURGER_SECCUSS,
        id:id,
        orderData:orderData
    }
}
export const purchaseBurgerFail = (error) =>{
    return {
        type:actionType.PURCHSE_BURGER_FAIL,
        error:error
    }
}
export const purchaseBurgerStart = () =>{
    return {
        type:actionType.PURCHSE_BURGER_START,
    }
}
export const purchaseBurger = (orderData, token) =>{
    return dispatch=> {
        dispatch(purchaseBurgerStart())
        axios.post("/orders.json?auth=" +token, orderData)
        .then(response=>{
        dispatch(purchaseBurgerSuccess(response.name, orderData))
            }).catch(error =>{
                dispatch(purchaseBurgerFail(error))
            })
    }
}

export const fetchOrderSuccess = ( orders) =>{
    return {
        type:actionType.FETCH_ORDER_SECCUSS,
        orders:orders
    }
}
export const fetchOrderFail = (error) =>{
    return {
        type:actionType.FETCH_ORDER_FAIL,
        error:error
    }
}
export const fetchOrderStart = () =>{
    return {
        type:actionType.FETCH_ORDER_START,
    }
}

export const fechOrder = (token, userId) =>{
    return dispatch => {
        dispatch(fetchOrderStart())
        const queryParams = "?auth=" + token +'&orderBy="userId"&equalTo="'+ userId + '"'
        axios.get("/orders.json" + queryParams ).then(res => {
            // setLoading(true)
            const fetchedData = []
            for(let key in res.data){
                fetchedData.push({
                    ...res.data[key],
                    id:key
                })

            }
            dispatch(fetchOrderSuccess(fetchedData))
        }).catch(error => {
            dispatch(fetchOrderFail(error))
        })
    }
}  