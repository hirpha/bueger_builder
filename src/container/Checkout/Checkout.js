import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Route, Routes, useLocation, useMatch, useNavigate } from 'react-router'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = (props) => {
   
    const location = useLocation()
    // const match = useMatch()
    // console.log(match)
    console.log(location.pathname)
    const navigate = useNavigate()

    const checkoutCancelHandler = () =>{
      navigate(-1)
    }
    const checkoutContinueHandler = () =>{
      navigate(location.pathname +"/contact-data", {
        replace:true, 
        state:props.ing
      })
    }

  let summary =   <Navigate to = "/"/>
  console.log(props.ing)

if(props.ing != null){
  summary = <div>
  <CheckoutSummary 
    ingridients = {props.ing}
    cancel =  {checkoutCancelHandler }
    continue = {checkoutContinueHandler}/>
</div>

}
   
  return summary
    
  
}

const mapStateToProps = state =>{
  return {
    ing:state.buildReducer.ingridients
  }
}
export default connect( mapStateToProps)(Checkout)
