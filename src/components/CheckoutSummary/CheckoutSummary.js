import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'

const CheckoutSummary = (props) => {
  return (
    <div>
      <h1>We hope it taste well</h1>
      <div>
        <Burger ingridients = {props.ingridients}/>
      </div>
      <Button btnType = "Danger"  clicked = {props.cancel}> CANCEL</Button>
      <Button btnType = "Success" clicked = {props.continue}> CONTINUE</Button>
    </div>
  )
}

export default CheckoutSummary
