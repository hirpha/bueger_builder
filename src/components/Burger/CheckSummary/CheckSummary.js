import React from 'react'
import Auxilary from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'
import {NavLink} from 'react-router-dom'


const CheckSummary = (props) => {
    const ingrident = Object.keys(props.ingridents)
    .map(igKey =>{
        return <li key={igKey}><span style={{textTransform:"capitalize"}}>{igKey}</span> {props.ingridents[igKey]}</li>
    })
  return (
    <Auxilary>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingridents:</p>
      <ol >
        {ingrident}
      </ol>
      <p>Total Price: <strong>{props.totalPrice.toFixed(2) }</strong> </p>
      <p>Continue to checkout?</p>
      <Button btnType = "Danger" clicked={props.showModal} >CANCEL</Button>
      <Button btnType = "Success" clicked = {props.continuePurschasing}>CONTINUE</Button>
      {/* <NavLink to = 'Checkout' state={props.ingridents}>CONTINUE</NavLink> */}
    </Auxilary>
  )
}

export default CheckSummary
