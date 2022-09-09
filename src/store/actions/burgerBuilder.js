import axios from '../../axios-order'
import * as actionTypes from './actionTypes'

export const setTotalPrice = () =>{
    return {
        type:actionTypes.SET_TOTAL_PRICE,
    }
}
export const addIngidient = (name) =>{
    return {
        type:actionTypes.ADDINGREDIENT,
        ingridientName:name
    }
}
export const removeIngidient = (name) =>{
    return {
        type:actionTypes.REMOVEINGRIDIENT,
        ingridientName:name
    }
}

export const setIngridients = (ingridients) =>{
    return {
        type:actionTypes.SETINGRIDIENTS,
        ingridients:ingridients
    }
}
export const fechingIngridientsFail = () =>{
    return {
        type:actionTypes.FECHING_INGRIDIENTS_FAIL,
    }
}

export const initIngridients = () =>{
    return dispatch => {
        axios.get("https://burger-app-ebc90-default-rtdb.firebaseio.com/ingridients.json")
        .then(response =>{
           return dispatch(setIngridients(response.data))
        }
        ).catch(error=>
            dispatch(fechingIngridientsFail())
            )

    }
}