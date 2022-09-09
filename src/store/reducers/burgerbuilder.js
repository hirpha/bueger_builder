

import * as actionTypes from '../actions/actionTypes'
const INGRIDIENT_PRICES = {
    salad:0.3,
    meat:1.3,
    cheese:0.4,
    bacon:0.5
  }

  const ingrident = {
    ingridients:null,
    price:4.5,
    error:false
  }

const burgerBuilderReducer = (state = ingrident, action) =>{
    
    switch(action.type){
        case actionTypes.SETINGRIDIENTS:
            const updatedState=  {
                ...state,
                ingridients:{
                    salad:action.ingridients.salad,
                    bacon:action.ingridients.bacon,
                    cheese:action.ingridients.cheese,
                    meat:action.ingridients.meat
                },
                // ingridients:action.ingridients,
                error:false
            }
            console.log(updatedState)
            return updatedState
        case actionTypes.FECHING_INGRIDIENTS_FAIL:
            return {
                ...state,
                error:true
            }
        case actionTypes.SET_TOTAL_PRICE:
            return {
                ...state,
                price:4.5
            }
        case actionTypes.ADDINGREDIENT:
            
            return {
                ...state,
                ingridients:{
                    ...state.ingridients,
                    [action.ingridientName]: state.ingridients[action.ingridientName] + 1
                },
                price:state.price + INGRIDIENT_PRICES[action.ingridientName]
            }
        case actionTypes.REMOVEINGRIDIENT:
            console.log(action.ingridientName)
            return {
                    ...state,
                    ingridients:{
                        ...state.ingridients,
                        [action.ingridientName]:state.ingridients[action.ingridientName] - 1
                    },
                    price:state.price - INGRIDIENT_PRICES[action.ingridientName]
            }
        default:
            return state
    }
}

export default burgerBuilderReducer