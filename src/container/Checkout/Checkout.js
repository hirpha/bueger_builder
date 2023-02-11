import React from 'react'
import { connect } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'

const Checkout = (props) => {
   
    const location = useLocation()
    const navigate = useNavigate()

    const checkoutCancelHandler = () =>{
      navigate(-1)
    }
    const checkoutContinueHandler = () =>{
      navigate(location.pathname +"/contact-data", {
        replace:true, 
      })
    }

  let summary =   <Navigate to = "/"/>

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
