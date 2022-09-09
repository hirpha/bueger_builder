import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import Styles from './BuildControls.module.css'

const BuildControls = (props) => {

    const controls = [
        {label:"Salad", type:"salad" },
        {label:"Meat", type:"meat" },
        {label:"Cheese", type:"cheese" },
        {label:"Bacon", type:"bacon" },
    ]
  return (
    <div className={Styles.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(control =>
      <BuildControl 
        key ={control.label} 
        label = {control.label} 
        addIngridient = {() =>props.addIngridient(control.type)}
        removeIngridient = {() => props.removeIngridient(control.type)}
        disabled = {props.disabled[control.type]}
        />
        )}
        <button 
            className={Styles.OrderButton} 
            disabled ={!props.isPurchasable}
            onClick = {props.showModal}>{props.isAuth?"ORDER NOW":"SIGNIN TO ORDER"}</button>
    </div>
  )
}



export default BuildControls
