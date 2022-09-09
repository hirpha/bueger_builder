import React, { useEffect, useState } from 'react'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import CheckSummary from '../../components/Burger/CheckSummary/CheckSummary'
import Modal from '../../components/UI/Modal/Modal'
import Auxilary from '../../hoc/Auxilary'

import axios from "../../axios-order"
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'
import { Navigate, useNavigate } from 'react-router'
import { connect } from 'react-redux'
import * as actionsType from '../../store/actions/index' 


const BurgerBuilder = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // useEffeect 
  useEffect(()=>{
    props.onInitIngridient()
    props.setPrice()
  },[])

  
////////////////////////
//continuePurschasingHandeler
const continuePurschasingHandeler = () =>{
    navigate('/checkout', {state:{ingridients:props.ing,totalPrice:props.price}})

}
////////////////////////
//show modal handler

const showModalHandler = () => {
  if(props.isAuth){   
  setShowModal(!showModal)
  } else {
    props.onOrderPurchase()
    navigate("/auth")
  }
}

  /// disabled info
  let disabledInfo = {
    ...props.ing
  }
  for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
  }
  let burger = <Spinner />
  let orderSummary = null
  if(props.error){
    burger = <p>ingrident's can't be loaded</p>
  }
  if(props.ing){
    burger=  <Auxilary>
      
      <Burger ingridients = {props.ing}/>
      <BuildControls 

        price = {props.price}
        addIngridient = {props.onAddIngridient} 
        removeIngridient = {props.onRemoveIngridient}
        disabled = {disabledInfo} 
        isPurchasable = {props.price > 4.50}
        isAuth = {props.isAuth}
        showModal = {showModalHandler}
        />
    </Auxilary>
  orderSummary = <CheckSummary 
  continuePurschasing ={continuePurschasingHandeler}
  totalPrice ={props.price}
  ingridents  = {props.ing} 
  showModal = {showModalHandler}>
</CheckSummary>
  }
   
if(loading){
  orderSummary = <Spinner/>
}
  return (
    <Auxilary>
      
       { showModal?
        <Modal 
          show = {showModal}
          showModal = {showModalHandler} 
         >
          {orderSummary}
        </Modal>:null
      
        }
      
      {burger}
    </Auxilary>
  )
}



const mapStateToProps = state =>{
  return {
    ing:state.buildReducer.ingridients,
    price:state.buildReducer.price,
    error:state.buildReducer.error,
    isAuth:state.auth.token != null
  }
}
const mapDispatchToProps = dispatch =>{
  return {
      onAddIngridient:(ingridientName)=>dispatch(actionsType.addIngidient(ingridientName)),
      onRemoveIngridient:(ingridientName)=>dispatch(actionsType.removeIngidient(ingridientName)),
      onInitIngridient:()=>dispatch(actionsType.initIngridients()),
      setPrice:()=>dispatch(actionsType.setTotalPrice()),
      onOrderPurchase:()=>dispatch(actionsType.orderPurchase())

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios))
